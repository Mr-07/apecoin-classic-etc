import { connectToDatabase } from "../../lib/mongodb";
import { ethers } from "ethers"
import RaffleAbi from '../../lib/contractsData/Raffle.json'
import RaffleAddress from '../../lib/contractsData/Raffle-address.json'
const keccak256 = require("keccak256")
const buf2hex = x => '0x' + x.toString('hex')

const participantsCountRequired = 11
const delayBetweenCallsInSeconds = 20

const getRandom32Int = () => {
    var temp = '0b';
    for (let i = 0; i < 32; i++)
      temp += Math.round(Math.random());

    const randomNum = BigInt(temp);
    console.log(randomNum.toString());
    return randomNum.toString()
}

export default async function handler(request, response) {
    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);
    const {
        query: { raffle_address }
      } = request;

    const results = await collection.find({raffle_address: raffle_address}).limit(10).toArray();

    if (results.length == 0) {
        response.status(500).json("Could not find raffle address " + raffle_address);
        return
    }

    const lastProcessingTimestamp = results[0]?.last_processing_timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000)
    const timeLeft = lastProcessingTimestamp + delayBetweenCallsInSeconds - currentTimestamp
    if (timeLeft > 0) {
        response.status(500).json("Please wait " + timeLeft + " seconds before the next request");
        return
    }


    await collection.updateOne({raffle_address: raffle_address}, { $set: { last_processing_timestamp: currentTimestamp } });

    const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_API_URL_GOERLI_INFURA)
    const wallet = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY_GOERLI, provider)

    const raffle = new ethers.Contract(RaffleAddress.address, RaffleAbi.abi, wallet)

    const currentWinner = results[0].next_winner

    const nextRandomNumber = getRandom32Int()
    const nextProvenanceHash = buf2hex(keccak256(parseInt(nextRandomNumber)))

    const participantsCount = await raffle.participantsCount()

    if (participantsCount < participantsCountRequired) {
        response.status(500).json("This raffle is not full yet. (" + participantsCount + "/" + participantsCountRequired + ")");
        return
    }

    try {
        await raffle.endRaffle(currentWinner, nextProvenanceHash);
    } catch (error) {
        response.status(500).json(error);
        return
    }

    response.status(200).json({raffleId: raffle_address, currentWinner: currentWinner});
}
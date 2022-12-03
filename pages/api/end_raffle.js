import { connectToDatabase } from "../../lib/mongodb";
import { ethers } from "ethers"
import RaffleAbi from '../../lib/contractsData/Raffle.json'
import RaffleAddress from '../../lib/contractsData/Raffle-address.json'
const keccak256 = require("keccak256")
const buf2hex = x => '0x' + x.toString('hex')

const participantsCountRequired = 11

// todo: limit 1 blockchain call every 5 mins per raffle

export default async function handler(request, response) {
    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);
    const {
        query: { raffle_id }
      } = request;

    const results = await collection.find({raffle_id: parseInt(raffle_id)}).limit(10).toArray();

    if (results.length == 0) {
        response.status(500).json("Could not find raffle id " + raffle_id);
        return
    }

    if (!results[0]?.not_processing) {
        response.status(500).json("Server is already processing to end this raffle");
        return
    }


    await collection.updateOne({raffle_id: parseInt(raffle_id)}, { $set: { not_processing: false } });

    const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_API_URL_GOERLI_INFURA)
    const wallet = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY_GOERLI, provider)

    const raffle = new ethers.Contract(RaffleAddress.address, RaffleAbi.abi, wallet)

    const currentWinner = results[0].next_winner
    const nextRandomNumber = Math.random()
    const nextProvenanceHash = buf2hex(keccak256(nextRandomNumber))

    const participantsCount = await raffle.participantsCount()

    if (participantsCount < participantsCountRequired) {
        await collection.updateOne({raffle_id: parseInt(raffle_id)}, { $set: { not_processing: true } });
        response.status(500).json("This raffle is not full yet. (" + participantsCount + "/" + participantsCountRequired + ")");
        return
    }

    await raffle.endRaffle(currentWinner, nextProvenanceHash);
    await collection.updateOne({raffle_id: parseInt(raffle_id)}, { $set: { not_processing: true, next_winner: nextRandomNumber } });

    response.status(200).json({raffleId: parseInt(raffle_id), currentWinner: currentWinner});
}
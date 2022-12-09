import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Raffle from "../components/common/Raffle";
import { ethers } from 'ethers'
import { motion } from "framer-motion";
import RaffleAbi from '../lib/contractsData/Raffle.json'
import RaffleAddress from '../lib/contractsData/Raffle-address.json'
// import TokenAbi from '../lib/contractsData/Token.json'
// import TokenAddress from '../lib/contractsData/Token-address.json'
import TokenAbi from '../lib/contractsData/ApeCoinAbi.json'
import TokenAddress from '../lib/contractsData/ApeCoin-address.json'
import Axios from 'axios'

const fromWei = (num) => ethers.utils.formatEther(num)
const toWei = (num) => ethers.utils.parseEther(num.toString())

function BurnRaffle() {
	const [raffle, setRaffle] = useState(null);
	const [token, setToken] = useState(null);
    const [account, setAccount] = useState(null)
    const [slots1, setSlots1] = useState([])
    const [allowance, setAllowance] = useState("")
    const [lastWinner, setLastWinner] = useState("")
    const [totalPayouts, setTotalPayouts] = useState("")
    const [totalBurn, setTotalBurn] = useState("")
    const [isSlotFilled, setIsSlotFilled] = useState(false)
    const raffleRef = useRef();
    raffleRef.current = raffle;

    const requestEndRaffle = async () => {
        console.log("requestEndRaffle")
        
        let serverUrl = "http://localhost:3000/"
        serverUrl = "https://apecoin-classic-etc.vercel.app/"
        Axios.post(serverUrl + 'api/end_raffle?raffle_address=' + RaffleAddress.address, {
            raffle_address: RaffleAddress.address
        }).then((response) => {
            const serverResult = response.data
            console.log(serverResult)
            loadSlots(raffleRef.current)
        })
    }
    
    const listenToEvents = async (raffle) => {
        raffle.on("SlotEntered", (user, slot) => {
            console.log("SlotEntered");
            console.log(user, slot);
            loadSlots(raffleRef.current)
        });
        raffle.on("SlotLeft", (user, slot) => {
            console.log("SlotLeft");
            console.log(user, slot);
            loadSlots(raffleRef.current)
        });
        raffle.on("RaffleFilled", () => {
            console.log("RaffleFilled");
            requestEndRaffle()
        });
        raffle.on("RaffleEnded", () => {
            console.log("RaffleEnded");
            loadSlots(raffleRef.current)
        });
    }

    const loadSlots = async(raffle) => {
        if (raffle == null)
            return
        
        console.log("Load slots")
        const participants = await raffle.getParticipants()
        console.log(participants)

        let slotsTemp = [
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
            { address: "Loading..." },
        ]

        for(let i = 0; i < participants.length; i++) {
            slotsTemp[i].address = participants[i]
        }

        setSlots1(slotsTemp)
        
        setLastWinner(await raffle.lastWinner())
        setTotalPayouts(fromWei(await raffle.totalPayout()))
        setTotalBurn(fromWei(await raffle.totalBurned()))
        setIsSlotFilled((await raffle.participantsCount()) >= 11)
    }

    const web3Handler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0])

        await loadContracts(accounts[0])
    }
  
    const loadContracts = async (acc) => {
        console.log("Load contracts")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const raffle = new ethers.Contract(RaffleAddress.address, RaffleAbi.abi, signer)
        setRaffle(raffle)
        const token = new ethers.Contract(TokenAddress.address, TokenAbi, signer)
        setToken(token)
        await loadSlots(raffle)
        listenToEvents(raffle)

        console.log(acc)
        console.log(raffle.address)

        let all = fromWei(await token.allowance(acc, raffle.address))
        console.log(all)
        setAllowance(all)

        if (parseInt(all) == 0) {
            console.log("Approve")
            await token.approve(raffle.address, toWei(10_000_000_000))
            let all = fromWei(await token.allowance(acc, raffle.address))
            setAllowance(all)
        }
    }
  
    useEffect(() => {
        web3Handler()

        return () => {
          raffle?.removeAllListeners("SlotEntered");
          raffle?.removeAllListeners("RaffleFilled");
          raffle?.removeAllListeners("SlotLeft");
        };
    }, [])

    return (
        <>
            <Box id="burn-raffle" w="100%" h="100%" bg="#07091b" position="relative">
                <Flex className="image-wrapper hero-v2" >
                    
                    <Flex className="raffle-container" >
                        {/* <div className="raffle-row row"> */}
                            <Raffle id={0} name={"20M"} account={account} raffle={raffle} web3Handler={web3Handler} 
                                slots={slots1} allowance={allowance} setAllowance={setAllowance} token={token} 
                                lastWinner={lastWinner} totalPayouts={totalPayouts} totalBurn={totalBurn} 
                                isSlotFilled={isSlotFilled} requestEndRaffle={requestEndRaffle} />
                            {/* <Raffle id={1} name={"50M"} account={account} raffle={raffle} web3Handler={web3Handler} />
                            <Raffle id={2} name={"200M"} account={account} raffle={raffle} web3Handler={web3Handler} /> */}
                        {/* </div> */}

                        {/* <div className="row">
                            <div className="col">Total Payouts: 20,541,654 ACE</div>
                            <div className="col">Total Burn: 789,123 ACE</div>
                        </div> */}
                    </Flex>
                    {/* <Flex className="about-header-text-container" position={"absolute"} top={["70%", "50%", "40%", "40%", "20%"]} zIndex={12}>
                        <Text className="about-header-text" fontSize={["24px", "40px", "48px", "56px", "64px"]}>
                            The Winner of a raffle is determined as soon as all slots are sold out.
                        </Text>
                    </Flex> */}
                    <motion.div
                        className="box"
                        initial={{ opacity: 1, filter: "blur(0px)" }}
                        animate={{ opacity: [0.67, 0.63, 0.60, 0.63, 0.67], filter: ["blur(0.1px)", "blur(0.6px)", "blur(0.9px)", "blur(0.6px)", "blur(0.1px)"] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0.7
                        }}
                    >
                        <img src="about-bg-p.webp" loading="eager" sizes="100vw" alt="" className="image cover"
                            srcSet="about-bg-p-500.webp 500w, about-bg-p-800.webp 800w, about-bg-p-1080.webp 1080w, about-bg-p-1600.webp 1600w, about-bg-p-2000.webp 2000w, about-bg-p-2600.webp 2600w, about-bg-p.webp 2880w"
                        />
                    </motion.div>
                    {/* <div className="position-absolute hero-v2-fade" /> */}
                </Flex>
            </Box>
        </>
    );
}

export default BurnRaffle;

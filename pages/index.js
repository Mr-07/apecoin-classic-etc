import { Flex, Box, Text } from '@chakra-ui/react';
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <Box id="home" w="100%" h="100vh" bg="#07091b" position="relative">
                <Flex className="image-wrapper hero-v1">
                    <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} position={"absolute"} top={["30%", "30%", "30%", "30%", "20%"]} zIndex={11}>
                        <Text className='tokenomics-title' fontSize={["32px", "40px", "48px", "56px", "64px"]}>
                            ApeCoin Classic ETC
                        </Text>
                    </Flex>
                    <Flex justifyContent={"center"} alignItems={"center"} w={["70%", "70%", "70%", "70%", "40%"]} opacity={0.8} position={"absolute"} top={["40%", "40%", "40%", "40%", "28%"]} zIndex={11} textAlign={"center"}>
                        <Text>
                            ACE is the first community token on ETC mostly controlled by people who believe Ethereum Classic
                            is poised to become the top programmable blockchain in the world.
                        </Text>
                    </Flex>
                    <motion.div
                        className="box"
                        initial={{ opacity: 1, filter: "blur(0px)" }}
                        animate={{ opacity: [0.99, 0.93, 0.90, 0.93, 0.99], filter: ["blur(0px)", "blur(0.6px)", "blur(0.9px)", "blur(0.6px)", "blur(0px)"] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0.7
                        }}
                    >
                        <img src="test.webp" loading="eager" sizes="100vw" alt="" className="image cover"
                            srcSet="test-500.webp 500w, test-800.webp 800w, test-1080.webp 1080w, test-1600.webp 1600w, test-2000.webp 2000w, test-2600.webp 2600w, test.webp 2880w"
                        />
                    </motion.div>
                    <div className="position-absolute hero-v1-fade" />
                </Flex>
            </Box>
            <Box id="home1" w="100%" h="100vh" bg="#07091b" position="relative">
                <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
                    <Flex mb={"50px"} mt={"30px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                        <Text className='tokenomics-title'>
                            Tokenomics
                        </Text>
                        <Flex mb={"10px"} mt={"10px"}>
                            <Text>
                                Total Supply: 1 trillion (1,000,000,000,000)
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex width={"100%"}>
                        <Flex flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"} padding={"10px 50px"} width={"33%"}>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>2.13</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(21,320,000,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Airdropped to 1066 active addresses on ETC dAPPS
                                </Text>
                            </Flex>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>1.54</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(15,439,924,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Distributed to previous holders.
                                </Text>
                            </Flex>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>9.8</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(98,000,000,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Distributed among ETC advisors + Initial Marketing
                                </Text>
                            </Flex>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>2</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(20,000,000,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Secondary Contract Creator
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex width={"34%"}>
                            <img src="tokenomics-image.png" loading="eager" alt="" className="image cover" />
                        </Flex>
                        <Flex flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"} padding={"10px 50px"} width={"33%"}>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>21.8</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(218,000,000,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Burned! 218 Billion (B) burned (213 B sent to burn wallet and 5 B burned by removing from Total Supply).
                                </Text>
                            </Flex>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>5</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(50,000,000,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Creator
                                </Text>
                            </Flex>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>36.9</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(369,000,000,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Dumped into the liquidity pool.
                                </Text>
                            </Flex>
                            <Flex flexDirection={"column"} w={"70%"}>
                                <Flex>
                                    <Text className='tokenomics-number'>20.02</Text>
                                    <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(200,240,076,000)</Text>
                                </Flex>
                                <Text className='tokenomics-text'>
                                    Multisignature Team Wallet for collabs, additional liquidity, giveaways and more
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex mt={"50px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                        <Flex flexDirection={"column"}>
                            <Flex>
                                <Text className='tokenomics-number'>0.8</Text>
                                <span className='color-accent-1 tokenomics-number'>%</span>
                                    <Text display={"flex"} alignItems={"flex-end"} >(8,000,000,000)</Text>
                            </Flex>
                            <Text className='tokenomics-text'>
                                Misc Expenditure
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            <div className="container-default w-container"><div className="divider _0px"></div></div>
            <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
                <Flex mt={"50px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <Text className='tokenomics-title'>
                        Liquidity
                    </Text>
                </Flex>
                <Flex width={"80%"} alignItems={"center"}>
                    <img src="liquidity.svg" loading="eager" alt="" className="image cover" />
                    <Text lineHeight={1.7} padding={"10px"} textAlign={"justify"}>
                        <b>35%</b> of the overall supply will be dumped into liquidity with an initial amount of 15 ETC.
                        This means that only purchases of about 0.5 ETC will initially go through.
                        This enables the “little guys” who believe in this project to become potential whales as we move forward.
                        As purchases come and the liquidity floor rises, the amount that can be purchased will also rise.
                        This ensures decentralization of our coin. We are leaderless, permissionless and immutable.
                        With the majority of our coin controlled by the ETC Army, we hope that community organization will naturally occur and
                        the community as a whole will move this project forward.
                    </Text>
                </Flex>
            </Flex>
            <div className="container-default w-container"><div className="divider _0px"></div></div>
            <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
                <Flex mt={"50px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <Text className='tokenomics-title'>
                        Burning LP Tokens
                    </Text>
                </Flex>
                <Flex width={"80%"} alignItems={"center"}>
                    <img src="liquidity.svg" loading="eager" alt="" className="image cover" />
                    <Text lineHeight={1.7} padding={"10px"} textAlign={"justify"}>
                        <b>70%</b> of liquidity pool tokens will be sent to a dead address. This means that our token will trade forever!
                        70% of our liquidity on HEBE Swap cannot be withdrawn! This also ensures the public that we are here to stay.
                        You may be wondering why 70% and not 100%? This is because we are preparing for the future as well.
                        When we get to a point where we are able to get listed on a major exchange, we would need a lot of liquidity
                        to be accepted on some of the large exchanges and it would be a shame if we had several million dollars of liquidity
                        stuck on Hebe Swap and couldn’t move 200K for liquidity to get listed on Binance or Kucoin.
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}

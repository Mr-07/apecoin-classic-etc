import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Raffle from "../components/common/Raffle";
import { motion } from "framer-motion";

function BurnRaffle() {
    return (
        <>
            <Box id="burn-raffle" w="100%" h="100%" bg="#07091b" position="relative">
                <Flex className="image-wrapper hero-v2" >
                    
                    <Flex className="raffle-container" >
                        {/* <div className="raffle-row row"> */}
                            <Raffle id={0} name={"20M"}/>
                            <Raffle id={1} name={"50M"}/>
                            <Raffle id={2} name={"200M"}/>
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

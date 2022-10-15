import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function About() {
    return (
        <>
            <Box id="about" w="100%" h="70vh" bg="#07091b" position="relative">
                <Flex className="image-wrapper hero-v2" h={"70vh"}>
                    <Flex className="about-header-text-container">
                        <Text className="about-header-text" fontSize={["32px", "40px", "48px", "56px", "64px"]}>
                            ACE is the first community token on ETC
                        </Text>
                    </Flex>
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
                    <div className="position-absolute hero-v2-fade" />
                </Flex>
            </Box>
            <Box id="about1" w="100%" h="100vh" bg="#07091b" position="relative">
                <Flex paddingTop={"10vh"}>
                    <Flex w={"50%"} justifyContent={"center"} alignItems={"flex-end"} mixBlendMode={"lighten"}>
                        <img src="ethereum_classic_bg.png" loading="eager" alt="" className="ethereum-classic-bg"></img>
                        <img src="ethereum_classic.png" loading="eager" alt="" className="ethereum-classic" ></img>
                    </Flex>
                    <Flex w={"40%"} textAlign={"justify"}>
                        <Text>
                            ACE is the first community token on ETC mostly controlled by people who believe Ethereum Classic is poised to become the top programmable blockchain in the world.
                            We aspire to be the first stop for people who want to explore Ethereum Classic. We are also working on collaborating with multiple projects on this immutable and
                            permissionless chain. We are working on bringing the excitement of a traditional meme coin coupled with education and exploration of ETC. Ethereum Classic is the
                            only programmable proof of work blockchain project with a capped supply and has never had any downtime! We are building a an information center to help people learn
                            things like how to unapprove a website from using spending funds in your wallet, where to find resources to learn about ETC, how to navigate ERC20 and ERC721 tokens.
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </>
    );
}

export default About;

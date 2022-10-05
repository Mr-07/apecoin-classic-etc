import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { Flex, Box, Text } from '@chakra-ui/react';
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <Box id="home" w="100%" h="100vh" bg="#07091b" position="relative">
                <Flex className="image-wrapper hero-v1">
                    <Flex alignItems={"center"} w={"30%"} opacity={0.8}>
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
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Flex>
                        <Text>
                            Tokenomics
                        </Text>
                    </Flex>
                    <Flex>
                        <img src="tokenomics-image.svg" loading="eager" alt="" className="image cover" />
                    </Flex>
                </Flex>
            </Box>
            <div className="container-default w-container"><div className="divider _0px"></div></div>
        </>
    )
}

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import SquareIconButton from "./SquareIconButton";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { FaTwitter, FaTelegramPlane, FaMedium } from "react-icons/fa";
import styles from './styles/nav.module.css';

const Footer = () => {

    return (
        <Flex
            w="100%"
            mt={"50px"}
            maxH="800px"
            flexDirection={"column"}
            backgroundColor={"#07091b"}
            borderTop="1px solid hsla(0, 0%, 100%, 0.12)"
        >
            <Flex p={["30px", "30px", "70px"]} alignItems={"center"} justifyContent={"center"} w={"100%"} flexDirection={["column", "column", "row", "row"]}>
                <Flex
                    borderRight={["unset", "unset", "1px solid hsla(0, 0%, 100%, 0.4)"]}
                    flexDirection={"column"} alignItems={"center"} mixBlendMode={"lighten"}
                    pr={["0px", "0px", "30px"]} mr={["0px", "0px", "30px"]} h={"300px"} overflow={"hidden"} w={["100%", "100%", "50%"]}
                    borderBottom={["1px solid hsla(0, 0%, 100%, 0.4)", "1px solid hsla(0, 0%, 100%, 0.4)", "unset"]}
                >
                    <Flex alignItems={"center"} opacity={0.8} flexDirection={"column"} justifyContent={"center"} position={"absolute"} zIndex={"10"}>
                        <Flex flexDirection={"row"} justifyContent={["center", "center", "flex-start"]} width={["100%", "100%", "50%"]}>
                            <Flex w="60px" h="60px" position="relative" cursor="pointer" _hover={{ opacity: 0.6 }}>
                                <Image src="/apecoin_classic_etc.jpg" w="120px" h="120px" layout="fill" alt="ApeCoin Classic ETC" />
                            </Flex>
                            <Flex alignItems={"center"} fontSize={"24px"} fontWeight={"550px"} pl={4} h="60px" position="relative" cursor="pointer" _hover={{ opacity: 0.6 }}>
                                <Text>
                                    ApeCoin Classic ETC
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex width={["80%", "70%", "50%"]} pt={"20px"} color={"#9c9da4"} fontSize={["16px", "18px"]}>
                            <Text>
                                ACE is the first community token on ETC mostly controlled by people who believe Ethereum Classic is poised to become
                                the top programmable blockchain in the world.
                            </Text>
                        </Flex>
                    </Flex>
                    <motion.div
                        className="footer-bg-box"
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
                        <div className="footer-bg-fade" />
                        <img src="footer-bg-p.webp" loading="eager" alt="" className="image cover"
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 840px, (max-width: 1439px) 56vw, 741.0546875px"
                            srcSet="footer-bg-p-500.webp 500w, footer-bg-p-800.webp 800w, footer-bg-p-1080.webp 1080w, footer-bg-p.webp 1310w"
                        />
                    </motion.div>
                </Flex>
                <Flex width={["100%", "100%", "50%"]} justifyContent={"space-between"} pl={"30px"} ml={["0px", "0px", "30px"]} mt={["30px", "30px", "0px"]}>
                    <Flex flexDirection={"column"}>
                        <Flex mb={"30px"}>
                            <Text fontSize={"20px"} fontWeight={400}>
                                Menu
                            </Text>
                        </Flex>
                        <Flex as="nav" flexDirection={"column"}>
                            <HStack as="ul" flexDirection={"column"} alignItems={"flex-start"} textStyle="navButton" listStyleType={"none"} color={"#9c9da4"} lineHeight={2} >
                                <li className={styles.footerMenuBtn} >
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li className={styles.footerMenuBtn}>
                                    <a href="/About">
                                        About
                                    </a>
                                </li>
                                {/* <li className={styles.footerMenuBtn} >
                                    <a href="https://docs.google.com/document/u/0/d/14r4oyV36HcDV_LAU5PyVqAKh_XWTo-yfe3TanmTtodY/mobilebasic" target="_blank">
                                        Whitepaper
                                    </a>
                                </li> */}
                                <li className={styles.footerMenuBtn}>
                                    <a href="https://medium.com/@apecoinclassic" target="_blank">
                                        Blog
                                    </a>
                                </li>
                                <li className={styles.footerMenuBtn}>
                                    <a href="/Roadmap">
                                        Roadmap
                                    </a>
                                </li>
                                {/* <li className={styles.footerMenuBtn}>
                                    <a href="/FAQ">
                                        FAQ
                                    </a>
                                </li> */}
                            </HStack>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={"column"}>
                        <Flex mb={"30px"}>
                            <Text fontSize={"20px"} fontWeight={400}>
                                Social Media
                            </Text>
                        </Flex>
                        <Flex as="nav" flexDirection={"column"}>
                            <HStack as="ul" flexDirection={"column"} alignItems={"flex-start"} textStyle="navButton" listStyleType={"none"} color={"#9c9da4"} lineHeight={2} >
                                <li className={styles.footerMenuBtn} >
                                    <a href="https://twitter.com/Apecoin_classic" target="_blank">
                                        Twitter
                                    </a>
                                </li>
                                <li className={styles.footerMenuBtn} target="_blank">
                                    <a href="https://t.me/apecoinclassic">
                                        Telegram
                                    </a>
                                </li>
                                <li className={styles.footerMenuBtn} >
                                    <a href="https://medium.com/@apecoinclassic" target="_blank">
                                        Medium
                                    </a>
                                </li>
                            </HStack>
                        </Flex>
                    </Flex>
                    <Flex w={"40%"} display={["none", "flex", "none", "none", "flex"]}>
                        <img src="footer-bg-1-p-500.png" loading="eager" className="image cover"
                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 90vw, (max-width: 991px) 600px, (max-width: 1439px) 47vw, 582px"
                            alt="Our Mission Is To Connect The World Through Data - Cryptocurrency X Webflow Template" />
                    </Flex>
                    <Flex />
                </Flex>
            </Flex>
            <Flex
                borderTop="1px solid hsla(0, 0%, 100%, 0.4)"
                justifyContent={"space-evenly"}
                flexDirection={["column", "column", "row"]}
                color={"#9c9da4"}
                p={"40px 0px"}
            >
                <Box order={[1, 1, 0]} pt={"10px"} textAlign={"center"}>Copyright © ApeCoin Classic ETC. All rights reserved.</Box>
                <HStack gap={1} order={[0, 0, 1]} justifyContent={"center"}>
                    <SquareIconButton
                        icon={FaTwitter}
                        size="28px"
                        href="https://twitter.com/Apecoin_classic"
                    />
                    <SquareIconButton
                        icon={FaTelegramPlane}
                        size="28px"
                        href="https://t.me/apecoinclassic"
                    />
                    <SquareIconButton
                        icon={FaMedium}
                        size="28px"
                        href="https://medium.com/@apecoinclassic"
                    />
                </HStack>
            </Flex>
        </Flex>
    );
};

export default Footer;

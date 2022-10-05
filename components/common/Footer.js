import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import SquareIconButton from "./SquareIconButton";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { FaTwitter, FaTelegramPlane, FaMedium } from "react-icons/fa";
import styles from './styles/nav.module.css';
import DesktopNavButton from './DesktopNavButton';

const Footer = () => {

    return (
        <Flex
            w="100%"
            maxH="800px"
            flexDirection={"column"}
            backgroundColor={"#07091b"}
            borderTop="1px solid hsla(0, 0%, 100%, 0.12)"
        >
            <Flex p={"100px 0px"} justifyContent={"center"} w={"100%"}>
                <Flex borderRight="1px solid hsla(0, 0%, 100%, 0.4)" pr={"30px"} mr={"30px"} w={"50%"}>
                    <Flex mixBlendMode={"lighten"}>
                        <Flex alignItems={"center"} w={"30%"} opacity={0.8}>
                            <Flex w={"40%"} justifyContent={"center"} alignItems={"center"}>
                                <Flex w="60px" h="60px" position="relative" cursor="pointer" _hover={{ opacity: 0.6 }}>
                                    <Image src="/apecoin_classic_etc.jpg" w="120px" h="120px" layout="fill" alt="ApeCoin Classic ETC" />
                                </Flex>
                                <Flex alignItems={"center"} fontSize={"24px"} fontWeight={"550px"} pl={4} h="60px" position="relative" cursor="pointer" _hover={{ opacity: 0.6 }}>
                                    <Text>
                                        ApeCoin Classic ETC
                                    </Text>
                                </Flex>
                            </Flex>
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
                            <div className="footer-bg-fade" />
                            <img src="footer-bg-p.webp" loading="eager" alt="" className="image cover"
                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 840px, (max-width: 1439px) 56vw, 741.0546875px"
                                srcSet="footer-bg-p-500.webp 500w, footer-bg-p-800.webp 800w, footer-bg-p-1080.webp 1080w, footer-bg-p.webp 1310w"
                            />
                        </motion.div>
                    </Flex>
                </Flex>
                <Flex w={"50%"} justifyContent={"space-evenly"}>
                    <Flex flexDirection={"column"}>
                        <Flex mb={"40px"}>
                            <Text fontSize={"20px"} fontWeight={400}>
                                Menu
                            </Text>
                        </Flex>
                        <Flex as="nav" flexDirection={"column"} textAlign={"left"} alignItems={"flex-start"}>
                            <HStack as="ul" flexDirection={"column"} textStyle="navButton" listStyleType={"none"} color={"#9c9da4"} >
                                <li className={styles.menuBtn} >
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li >
                                    About
                                </li>
                                {/* <DesktopNavButton targetElementId="about" label="About" /> */}
                                <li className={styles.menuBtn} >
                                    <a href="https://docs.google.com/document/u/0/d/14r4oyV36HcDV_LAU5PyVqAKh_XWTo-yfe3TanmTtodY/mobilebasic" target="_blank">
                                        Whitepaper
                                    </a>
                                </li>
                                <DesktopNavButton targetElementId="etc_resources" label="ETC Resources" />
                            </HStack>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                borderTop="1px solid hsla(0, 0%, 100%, 0.4)"
                justifyContent={"space-evenly"}
                color={"#9c9da4"}
                p={"40px 0px"}
            >
                <Box>Copyright © ApeCoin Classic ETC. All rights reserved.</Box>
                <HStack gap={1}>
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

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Box,
    HStack,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Text,
    UnorderedList,
    ListItem,
    Center,
    Flex
} from '@chakra-ui/react';
import { FaTwitter, FaTelegramPlane, FaMedium } from "react-icons/fa";
import HamburgerButton from './HamburgerButton';
import SquareIconButton from "./SquareIconButton";
import styles from './styles/nav.module.css';

const NAV_STYLE = { listStyle: 'none', paddingLeft: 0 };

const MobileMenu = ({ contract, setContract }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onClose = () => {
        setIsOpen(false);
    };

    const onHamburguerToggle = () => {
        setIsOpen(!isOpen);
    };

    if (!isMounted) return null;

    return (
        <>
            <Box as="nav">
                <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent px={0}>
                        <DrawerHeader bg="#081A3D" px={6}>
                            <HStack justifyContent="center" mixBlendMode={"lighten"}>
                                <Box h="32px" w="32px" display="inline-block" verticalAlign="middle" position="relative">
                                    <Image src="/apecoin_classic_etc.jpg" w="120px" h="120px" layout="fill" alt="ApeCoin Classic ETC" />
                                </Box>
                                <Text fontSize="16px" color="#75A7D3" textAlign="left" fontWeight="900">
                                    ApeCoin Classic ETC
                                </Text>
                            </HStack>
                        </DrawerHeader>
                        <DrawerBody bgColor="#041525" py={6} px={6}>
                            <UnorderedList
                                style={NAV_STYLE}
                                color="#fff"
                                marginStart={0}
                                mb={4}
                                pb={4}
                            >
                                <ListItem mb={3}>
                                    <a href="/">
                                        Home
                                    </a>
                                </ListItem>
                                <ListItem mb={3}>
                                    <a href="/About">
                                        About
                                    </a>
                                </ListItem>
                                <ListItem className={styles.disabledMenuBtn} mb={3}>
                                    {/* <a href="https://docs.google.com/document/u/0/d/14r4oyV36HcDV_LAU5PyVqAKh_XWTo-yfe3TanmTtodY/mobilebasic" target="_blank"> */}
                                    Whitepaper
                                    {/* </a> */}
                                </ListItem>
                                <ListItem className={styles.disabledMenuBtn} mb={3}>
                                    {/* <a href="https://docs.google.com/document/u/0/d/14r4oyV36HcDV_LAU5PyVqAKh_XWTo-yfe3TanmTtodY/mobilebasic" target="_blank"> */}
                                    Collaborations
                                    {/* </a> */}
                                </ListItem>
                                <ListItem mb={3}>
                                    <a href="https://medium.com/@apecoinclassic" target="_blank">
                                        Blog
                                    </a>
                                </ListItem>
                                <ListItem mb={3}>
                                    <a href="/Roadmap">
                                        Roadmap
                                    </a>
                                </ListItem>
                            </UnorderedList>
                            <HStack gap={4} justifyContent="center" borderTop="1px dashed rgba(255, 255, 255, 0.2)" pt={5}>
                                <SquareIconButton
                                    icon={FaTwitter}
                                    size="28px"
                                    href="https://twitter.com/Apecoin_classic"
                                    color={"#9c9da4"}
                                />
                                <SquareIconButton
                                    icon={FaTelegramPlane}
                                    size="28px"
                                    href="https://t.me/apecoinclassic"
                                    color={"#9c9da4"}
                                />
                                <SquareIconButton
                                    icon={FaMedium}
                                    size="28px"
                                    href="https://medium.com/@apecoinclassic"
                                    color={"#9c9da4"}
                                />
                            </HStack>
                            <Center mt={4} color="#75A7D3" fontSize="15px">
                                © ApeCoin Classic ETC. All rights reserved.
                            </Center>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <HamburgerButton onClick={onHamburguerToggle} isOpen={isOpen} />
            </Box>
        </>
    );
};

export default MobileMenu;

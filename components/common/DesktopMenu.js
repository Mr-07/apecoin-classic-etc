import React from 'react';
import { Box, HStack, Flex } from '@chakra-ui/react';
import DesktopNavButton from './DesktopNavButton';
import styles from './styles/nav.module.css';
const NAV_STYLE = { listStyle: 'none', paddingLeft: 0 };

const DesktopMenu = () => {
    return (
        <Flex as="nav" justifyContent={"flex-start"} pl={"100px"} width={"60%"}>
            <HStack as="ul" textStyle="navButton" spacing={8} style={NAV_STYLE} >
                <li className={styles.menuBtn}>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li className={styles.menuBtn}>
                    <a href="/About">
                        About
                    </a>
                </li>
                <li className={styles.menuBtn}>
                    <a href="https://docs.google.com/document/u/0/d/14r4oyV36HcDV_LAU5PyVqAKh_XWTo-yfe3TanmTtodY/mobilebasic" target="_blank">
                        Whitepaper
                    </a>
                </li>
                <DesktopNavButton targetElementId="etc_resources" label="ETC Resources" />
                <li className={styles.menuBtn}>
                    <a href="https://medium.com/@apecoinclassic" target="_blank">
                        Blog
                    </a>
                </li>
                <li className={styles.menuBtn}>
                    <a href="/Roadmap">
                        Roadmap
                    </a>
                </li>
                <li className={styles.menuBtn}>
                    <a href="/FAQ">
                        FAQ
                    </a>
                </li>
            </HStack>
        </Flex>
    );
};

export default DesktopMenu;

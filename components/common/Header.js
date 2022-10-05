import React from 'react';
import Image from 'next/image';
import { Flex, Box, useBreakpointValue, Text } from '@chakra-ui/react';
import DesktopMenu from './DesktopMenu';
// import { scroller } from 'react-scroll';
// import { useScrollPosition } from '../../hooks';
// import MobileMenu from './MobileMenu';

const Header = ({ contract, setContract }) => {
    const variant = useBreakpointValue({ base: 'hamburger', lg: 'menu' }) || 'menu';

    const onGoBackHome = () => {
        // scroller.scrollTo('home', {
        //     duration: 500,
        //     smooth: 'easeInOutQuint',
        // });
    };

    return (
        <Flex
            as="header"
            direction="row"
            justify="space-between"
            alignItems="center"
            position="absolute"
            w="100%"
            zIndex="9999"
            p={"28px 24px"}
            mixBlendMode={"lighten"}
            bg="#07091b"
        >
            <Flex w={"40%"} justifyContent={"center"} alignItems={"center"} >
                <Flex w="60px" h="60px" position="relative" cursor="pointer" _hover={{ opacity: 0.6 }} onClick={onGoBackHome}>
                    <Image src="/apecoin_classic_etc.jpg" w="120px" h="120px" layout="fill" alt="ApeCoin Classic ETC" />
                </Flex>
                <Flex alignItems={"center"} fontSize={"24px"} fontWeight={"550px"} pl={4} h="60px" position="relative" cursor="pointer" _hover={{ opacity: 0.6 }} onClick={onGoBackHome}>
                    <Text>
                        ApeCoin Classic ETC
                    </Text>
                </Flex>
            </Flex>
            {variant === 'menu' && <DesktopMenu />}
            {/* {variant === 'hamburger' && <MobileMenu setContract={setContract} contract={contract} />} */}
        </Flex>
    );
};

export default Header;

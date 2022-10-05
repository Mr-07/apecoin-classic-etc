import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
    const element = React.cloneElement(children);

    return (
        <Box color="white">
            <Header/>{element}<Footer/>
        </Box>
    );
};

export default Layout;

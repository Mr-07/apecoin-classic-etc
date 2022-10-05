import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Roadmap() {
    return (
        <>
            <Box id="roadmap" w="100%" h="100vh" p={"2px"} bg="#07091b" position="relative">
                <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
                    <div className="position-absolute roadmap-image-fade" />
                    <Flex w={"100%"} h={"90%"} justifyContent={"center"} alignItems={"center"} mt={"10vh"}>
                        <img src="roadmap.jpg" loading="eager" alt="" className="roadmap-image" />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default Roadmap;

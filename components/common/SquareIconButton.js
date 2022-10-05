import React from "react";
import { Link, Icon, Center, Square } from "@chakra-ui/react";

const SquareIconButton = ({ size = "40px", href, icon }) => {
    return (
        <Link
            href={href}
            isExternal
            _hover={{ textDecoration: "none", outline: "none", outlineOffset: 0 }}
            _focus={{ outline: "none" }}
        >
            <Center>
                <Square
                    size={size}
                    background="hsla(0, 0%, 100%, 0.1)"
                    margin="0"
                    transition="background-color .2s"
                    _hover={{ backgroundColor: "#fff", color: "#000" }}
                >
                    <Icon as={icon} w={"60%"} h={"60%"} />
                </Square>
            </Center>
        </Link>
    );
};

export default SquareIconButton;

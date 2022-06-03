import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
    backButton: boolean;
}

export function Header({ backButton }: HeaderProps) {
    const [isBackButton, setIsBackButton] = useState(false)

    useEffect(() => {
        setIsBackButton(backButton)

    }, [])

    if (isBackButton) {
        return (
            <Flex height='100px' margin='0 auto' maxW='1160px' px='4'>
                <Flex width='100%' justify='space-between' align='center'>
                    <Link href='/'>
                        <Icon as={FiChevronLeft} cursor='pointer' />
                    </Link>

                    <img src="/images/Logo.svg" alt="Logo" />

                    <Flex></Flex>
                </Flex>
            </Flex >
        )
    }

    return (
        <Flex maxW='1440px' px='4' margin={'0 auto'} >
            <Flex height='100px' align='center' justify='center' w='100%'>
                <Box>
                    <img src="/images/Logo.svg" alt="Logo" />
                </Box>
            </Flex >
        </Flex>
    )
}
import { Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
    return (
        <Flex backgroundImage='/images/Banner-Europa.png' backgroundRepeat='no-repeat' bgSize='cover' bgPosition='center center' h='500px' justify='center' w='100vw'>
            <Flex maxW='1160px' align='flex-end' w='100%' py='16' px='4'>
                <Heading color='white' fontSize='5xl' fontWeight='600'>
                    Europa
                </Heading>
            </Flex>
        </Flex>
    )
}
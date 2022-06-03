import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex backgroundImage='/images/Background.png' backgroundRepeat='no-repeat' bgSize='cover' h='335px' justify='center' w='100vw'>
            <Flex maxW='1160px' align='center' justify='space-between' w='100%' px='10'>
                <Stack spacing='4'>
                    <Heading color='gray.50' fontFamily='Poppins' fontWeight='500'>
                        5 Continentes, <br />
                        infinitas possibilidades.
                    </Heading>
                    <Text fontSize='lg' fontWeight='400' color='gray.100'>
                        Chegou a hora de tirar do papel a viagem que você <br />
                        sempre sonhou.
                    </Text>
                </Stack>
                <Image src="/images/Airplane.svg" alt="Airplane" position='relative' top='14' />
            </Flex>
        </Flex>
    )
}
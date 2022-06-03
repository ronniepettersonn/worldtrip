import { Flex, Box, Stack, Image, Text } from "@chakra-ui/react";

export function SectionHome() {
    return (
        <Flex justify='center' align='center' h='335px'>
            <Flex maxW='1160px' align='flex-end' justify='space-between' w='100%' px='10'>
                <Box>
                    <Stack spacing='4'>
                        <Image src="/images/Cocktail.svg" h='85px' />
                        <Text fontSize='24px' fontWeight='600' >vida noturna</Text>
                    </Stack>
                </Box>

                <Box>
                    <Stack spacing='4'>
                        <Image src="/images/Surf.svg" h='85px' />
                        <Text fontSize='24px' fontWeight='600'>praia</Text>
                    </Stack>
                </Box>

                <Box>
                    <Stack spacing='4'>
                        <Image src="/images/Building.svg" h='85px' />
                        <Text fontSize='24px' fontWeight='600'>moderno</Text>
                    </Stack>
                </Box>

                <Box>
                    <Stack spacing='4'>
                        <Image src="/images/Museum.svg" h='85px' />
                        <Text fontSize='24px' fontWeight='600'>clássico</Text>
                    </Stack>
                </Box>

                <Box>
                    <Stack spacing='4'>
                        <Image src="/images/Earth.svg" h='85px' />
                        <Text fontSize='24px' fontWeight='600'>e mais...</Text>
                    </Stack>
                </Box>
            </Flex>
        </Flex>
    )
}
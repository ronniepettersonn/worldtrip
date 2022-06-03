import { Badge, Box, Flex, Grid, Heading, Icon, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { FiInfo } from 'react-icons/fi'
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentContent } from "../components/ContinentContent";

export default function Europa() {
    return (
        <>
            <Header backButton />

            <ContinentBanner />

            <ContinentContent />

            <Flex maxW='1160px' margin='0 auto' px='4' direction='column' mb='40px' >
                <Heading mb='40px' >Cidades +100</Heading>


                <Grid rowGap='40px' gridTemplateColumns='repeat(auto-fill, minmax(256px, 1fr))' columnGap='34px'>
                    <Box maxW='sm' borderWidth='1px' borderColor='rgba(255, 186, 8, .5)' borderRadius='lg' overflow='hidden' maxWidth='256px'>
                        <Image src='/images/Londres.png' alt='teste' />

                        <Box p='6'>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                Londres
                            </Box>

                            <Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    Reino Unido
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box maxW='sm' borderWidth='1px' borderColor='rgba(255, 186, 8, .5)' borderRadius='lg' overflow='hidden' maxWidth='256px'>
                        <Image src='/images/Londres.png' alt='teste' />

                        <Box p='6'>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                Londres
                            </Box>

                            <Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    Reino Unido
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box maxW='sm' borderWidth='1px' borderColor='rgba(255, 186, 8, .5)' borderRadius='lg' overflow='hidden' maxWidth='256px'>
                        <Image src='/images/Londres.png' alt='teste' />

                        <Box p='6'>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                Londres
                            </Box>

                            <Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    Reino Unido
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box maxW='sm' borderWidth='1px' borderColor='rgba(255, 186, 8, .5)' borderRadius='lg' overflow='hidden' maxWidth='256px'>
                        <Image src='/images/Londres.png' alt='teste' />

                        <Box p='6'>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                Londres
                            </Box>

                            <Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    Reino Unido
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box maxW='sm' borderWidth='1px' borderColor='rgba(255, 186, 8, .5)' borderRadius='lg' overflow='hidden' maxWidth='256px'>
                        <Image src='/images/Londres.png' alt='teste' />

                        <Box p='6'>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                Londres
                            </Box>

                            <Box>
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    Reino Unido
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Flex>
        </>
    )
}


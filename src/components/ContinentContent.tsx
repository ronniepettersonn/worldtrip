import { Flex, Stack, Heading, Tooltip, Icon, Text } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

export function ContinentContent() {
    return (
        <Flex maxW='1160px' margin='0 auto' px='4' justify='space-between' py='20'>
            <Text as='p' maxW='600px' textAlign='justify'>
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
            <Stack direction='row' spacing='20' maxW='490px'>
                <Flex direction='column' align='center'>
                    <Heading color='#FFBA08'>50</Heading>
                    <Text>países</Text>
                </Flex>

                <Flex direction='column' align='center'>
                    <Heading color='#FFBA08'>60</Heading>
                    <Text>línguas</Text>
                </Flex>

                <Flex direction='column' align='center'>
                    <Heading color='#FFBA08'>27</Heading>
                    <Flex align='center' gap='2'>
                        <Text>cidades +100 </Text>

                        <Tooltip label='Testando pra ver se dá certo!'>
                            <Flex as='span'>
                                <Icon as={FiInfo} color='#999999' opacity='.5' />
                            </Flex>
                        </Tooltip>
                    </Flex>
                </Flex>
            </Stack>
        </Flex >
    )
}
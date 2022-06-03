import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'Poppins',
                bg: '#F5F8FA',
                color: '#47585B'
            },
            a: {
                textDecoration: 'none'
            },
            colors: {
                brand: {
                    gray: {
                        50: '#F5F8FA',
                        100: '#DADADA'
                    }
                }
            }
        }
    }
})
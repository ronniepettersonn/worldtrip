import { Box, Button, Divider, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SectionHome } from "../components/SectionHome";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header backButton={false} />
      <Banner />
      <SectionHome />

      <Divider w='90px' margin='0 auto' borderBottom='2px' borderBottomColor='#47585B' mb='12' />

      <Flex justify='center'>
        <Flex maxW='1240px' justify='center' align='center' direction='column'>
          <Heading textAlign='center'>Vamos nessa? <br /> Então escolha seu continente</Heading>


          <Flex w='100%' h='450px' px='10' mt='12' mb='12'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{
                clickable: true
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <Link href='/europa'>

                  <Flex bgImage='/images/Europa.png' h='100%' color='white' align='center' justify='center' direction='column' cursor='pointer'>
                    <Heading>
                      Europa
                    </Heading>
                    <Text>
                      O continente mais antigo
                    </Text>
                  </Flex>

                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Flex bgImage='/images/Europa.png' h='100%' color='white' align='center' justify='center' direction='column'>
                  <Heading>
                    América do Norte
                  </Heading>
                  <Text>
                    O continente mais antigo
                  </Text>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                <Flex bgImage='/images/Europa.png' h='100%' color='white' align='center' justify='center' direction='column'>
                  <Heading>
                    América do Sul
                  </Heading>
                  <Text>
                    O continente mais antigo
                  </Text>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                <Flex bgImage='/images/Europa.png' h='100%' color='white' align='center' justify='center' direction='column'>
                  <Heading>
                    África
                  </Heading>
                  <Text>
                    O continente mais antigo
                  </Text>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                <Flex bgImage='/images/Europa.png' h='100%' color='white' align='center' justify='center' direction='column'>
                  <Heading>
                    Oceania
                  </Heading>
                  <Text>
                    O continente mais antigo
                  </Text>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                <Flex bgImage='/images/Europa.png' h='100%' color='white' align='center' justify='center' direction='column'>
                  <Heading>
                    Ásia
                  </Heading>
                  <Text>
                    O continente mais antigo
                  </Text>
                </Flex>
              </SwiperSlide>

            </Swiper>

          </Flex>

        </Flex>
      </Flex>

    </>
  )
}

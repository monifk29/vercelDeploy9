import React from 'react'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';



const Card = (props) => {

   

    const IMAGE = props.image

    console.log(props);

    

    const addCart = () => {
        let cartData = JSON.parse(localStorage.getItem("mock9-cart")) || [];
        cartData.push(props)
        localStorage.setItem("mock9-cart",JSON.stringify(cartData));


    }
  
    return (
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={IMAGE}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {props.type}
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {props.name}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={600} fontSize={'xl'}>
                 Price Start From : ${props.price_starts_from}
                </Text>
               
              </Stack>

              <Text textDecoration={'underline'} color={'gray.600'}>
                 Rating : {props.rating}
                </Text>

              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Votes :  {props.number_of_votes}
              </Text>

              <Button colorScheme='teal' variant="solid" onClick={addCart}>Add to Cart</Button>
            </Stack>
          </Box>
        </Center>
      );

}

export default Card

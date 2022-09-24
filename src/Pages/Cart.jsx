import React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Box,
    useDisclosure,
    PinInput, 
    PinInputField,
    HStack
  } from '@chakra-ui/react'

  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import { useState } from 'react'



const Cart = () => {

    const [qty,setQty] = useState(1);

    const { isOpen, onOpen, onClose } = useDisclosure()

const data = JSON.parse(localStorage.getItem("mock9-cart"));

const [one,setOne] = useState("");
const [two,setTwo] = useState("")
const [three,setThree] = useState("")
const [four,setFour] = useState("")


const otpSubmit = () => {

    console.log(one,two,three,four)

 if(one == 1 && two == 2 && three == 3 && four == 4){
    alert("Order Placed Successfully")
 }

 else {
    alert("Wrong OTP")
 }
}

  return (
    <Box w="80%" margin = "auto" marginTop = "20px">

    <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>NAME</Th>
        <Th>PRICE</Th>
        <Th >TYPE</Th>
        <Th >Qty</Th>
        <Th >DELETE</Th>

      </Tr>
    </Thead>

    <Tbody>
      
        {
            data?.map((item) => (
                <Tr>
                <Td>{item.name}</Td>
                <Td>{item.price_starts_from}</Td>
                <Td>{item.type}</Td>
                <Td>{<input type="number" value={qty} onChange={(e) => setQty(e.target.value)}/>}</Td>
                <Td><Button>DELETE</Button></Td>

                </Tr>

            ))
        }
    
      
    </Tbody>
   
  </Table>
</TableContainer>

<Button onClick={onOpen}>Proceed To Buy</Button>

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}

            <HStack>
  <PinInput>
    <PinInputField onChange={(e) => setOne(e.target.value)}/>
    <PinInputField onChange={(e) => setTwo(e.target.value)} />
    <PinInputField onChange={(e) => setThree(e.target.value)} />
    <PinInputField onChange={(e) => setFour(e.target.value)} />
  </PinInput>
</HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={otpSubmit} variant='ghost'>Submit OTP</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

</Box>
  )
}

export default Cart
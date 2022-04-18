import { Table, TableCaption, TableContainer, Td, Th, Thead, Tr, Tbody, Tfoot, Flex, Text, IconButton, Icon, Box} from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../theme'
import { FiArrowRight } from "react-icons/fi"
import { FaCircle } from "react-icons/fa"


const TableItem = () => {
    return(
        <Tr>
            <Td fontWeight={"bold"}>Today</Td>
            <Td color={"#333"}>Starbucks cafe</Td>
            <Td color={Colors.nevbasegrey}>Card payment</Td>
            <Td display={"flex"} alignItems="center" color={"purple"}> 
                <Box className='bg-purple-400 rounded-md mr-2'>
                    <Box bg={"purple"} h={2} w={2} />
                </Box>
                Food
            </Td>
            <Td isNumeric fontWeight="bold">-15.00 $</Td>
        </Tr>
    )
}

export default function TransactionsTable() {
  return (
    <TableContainer bg={Colors.nevwhite} padding={5} rounded={"lg"}  shadow="md">
        <Flex justifyContent={"space-between"} alignItems="center">
            <Text fontWeight={"bold"}>Latest transactions</Text>
            <IconButton as={FiArrowRight} bg={Colors.nevgreen} color={Colors.nevwhite}/>
        </Flex>
        <Table variant='simple'>
            <TableCaption>
                <Flex alignItems={"center"} w="full" justifyContent="center">
                    <Text fontWeight={"bold"} mr={2}>See more</Text>
                    <Icon as={FiArrowRight} color={Colors.nevgreen}/>
                </Flex>
            </TableCaption>
            <Tbody>
                <TableItem />
                <TableItem />
            </Tbody>
        </Table>
    </TableContainer>
  )
}

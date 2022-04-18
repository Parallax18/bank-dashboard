import { Box, Flex, Icon, IconButton, Table, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import React, {useState} from 'react'
import { FiArrowRight, FiDollarSign } from 'react-icons/fi'
import { Colors } from '../theme'
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderWidth: 1,
      hoverOffset: 4
    }]
  };

export default function Expenses() {
    Chart.register(ArcElement);

    const [chartData, setChartData] = useState(data);
  return (
    <Box bg={Colors.nevwhite} padding={5} rounded={"lg"}  shadow="md">
         <Flex justifyContent={"space-between"} alignItems="center">
            <Text fontWeight={"bold"}>All expenses</Text>
            <IconButton as={FiArrowRight} bg={Colors.nevgreen} color={Colors.nevwhite}/>
        </Flex>
        <Table variant="simple">
            <Thead border={0}>
                <Tr>
                    <Td fontWeight={"bold"} color={Colors.nevbasegrey} fontSize={"sm"} >daily</Td>
                    <Td fontWeight={"bold"} color={Colors.nevbasegrey} fontSize={"sm"} >weekly</Td>
                    <Td fontWeight={"bold"} color={Colors.nevbasegrey} fontSize={"sm"} >monthly</Td>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td fontWeight={"bold"} color={Colors.nevbasegrey} fontSize={"sm"} >
                        <Flex alignItems={"center"}>
                            <Text fontWeight={"bold"} fontSize={"md"} color="#333" mr={1}>275.40</Text>
                            <Icon as={FiDollarSign} color={Colors.nevbasegrey}/>
                        </Flex>
                    </Td>
                    <Td fontWeight={"bold"} color={Colors.nevbasegrey} fontSize={"sm"} >
                        <Flex alignItems={"center"}>
                            <Text fontWeight={"bold"} fontSize={"md"} color="#333" mr={1}>2,440.30</Text>
                            <Icon as={FiDollarSign} color={Colors.nevbasegrey}/>
                        </Flex>
                    </Td>
                    <Td fontWeight={"bold"} color={Colors.nevbasegrey} fontSize={"sm"} >
                        <Flex alignItems={"center"}>
                            <Text fontWeight={"bold"} fontSize={"md"} color="#333" mr={1}>820.00</Text>
                            <Icon as={FiDollarSign} color={Colors.nevbasegrey}/>
                        </Flex>
                    </Td>
                </Tr>
            </Tbody>
        </Table>
        <Doughnut data={chartData} />
    </Box>
  )
}

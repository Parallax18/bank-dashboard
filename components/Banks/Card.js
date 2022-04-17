import { Box, HStack, Icon, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import {Colors} from '../../theme';
import {FiCopy, FiDollarSign, FiMoreVertical} from "react-icons/fi"
import { GridItem } from '@chakra-ui/react';

export default function Card() {
  return (
    <Box bg={Colors.nevwhite} rounded={"lg"} className="border-red-900" shadow="md" p={5}>
      <HStack  justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"sm"} color="#333" fontWeight={"bold"}>Wema bank - ALAT</Text>
          <Flex>
            <Text fontSize={"xs"} color={Colors.nevbasegrey} mr={3}>90 **** 9448</Text>
            <Icon as={FiCopy} color="#ccc"/>
          </Flex>
        </Box>
        <Image src='/assets/alat.png' h={50} />
      </HStack>
      <HStack justifyContent={"space-between"} mt={10}>
        <Flex alignItems={"center"}>
          <Icon as={FiDollarSign} color={Colors.nevbasegrey}/>
          <Text fontWeight={"bold"} fontSize={"xl"}>12.220</Text>
        </Flex>
        <Icon as={FiMoreVertical} />
      </HStack>
    </Box>
  )
}

import { Box, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../theme'
import { FiDollarSign, FiArrowRight } from "react-icons/fi"
import NevButton from './NevButton'

export default function AccountDetailsCard() {
  return (
    <VStack bg={Colors.nevwhite} rounded={"lg"} justifyContent={"space-between"} className="border-red-900" shadow="md" p={5}>
        <HStack justifyContent={"space-between"} w="full">
            <Text fontSize={"xs"}fontWeight="bold"color={Colors.nevbasegrey}>Main Account</Text>
            <Text fontSize={"xs"}fontWeight="bold"color={Colors.nevbasegrey}>Available funds</Text>
        </HStack>
        <HStack justifyContent={"space-between"} w={"full"}>
          <Box>
            <Text fontSize={"sm"} color="#333" fontWeight={"bold"}>NevBank Savings Account</Text>
            <Flex mt={1}>
              <Text fontSize={"xs"} color={Colors.nevbasegrey}  mr={3}>88 1240 7768 9904 0002 2345</Text>
              <Icon as={FiArrowRight} color={Colors.nevgreen}/>
            </Flex>
          </Box>
          <Flex alignItems={"center"}>
            <Icon as={FiDollarSign} color={Colors.nevbasegrey}/>
            <Text fontWeight={"bold"} fontSize={"2xl"}>68.789</Text>
          </Flex>
        </HStack>
          <HStack w={"full"}>
            <NevButton variant={{bg: Colors.nevgreen, color: Colors.nevwhite}} text="Transfer money" />
            <NevButton variant={{bg: Colors.nevdarkgrey, color: "#333"}} text="Link acconunts"/>
          </HStack>
    </VStack>
  )
}
import { Box, HStack, Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../theme'
import NevButton from './NevButton'

export default function StandingOrder() {
  return (
    <Box bg={Colors.nevgreen} rounded={"lg"} className="border-red-900" shadow="md" p={5}>
        <HStack justifyContent={"space-between"} mb={3}>
            <Text color={Colors.nevwhite} fontWeight="bold">Defining standing orders</Text>
            <HStack>
                <Box h={2} w={2} bg={Colors.nevbasegreen}/>
                <Box h={2} w={2} bg={Colors.nevwhite}/>
                <Box h={2} w={2} bg={Colors.nevlightgreen}/>
            </HStack>
        </HStack>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
            <VStack justifyContent={"start"} alignItems="start">
                <Text color={Colors.nevlightgreen} fontSize={"sm"} mb={3}>We help you remember about recurring payments for the fixed price. Define once standing order and the bank will take care of your regular transfers</Text>
                <NevButton variant={{bg: Colors.nevwhite, color: '#333'}} text="Define standing order"/>
            </VStack>
            <Image src='/assets/calendar.png' h={100} />
        </HStack>
    </Box>
  )
}

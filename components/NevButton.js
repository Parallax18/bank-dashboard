import React from 'react';
import { Button } from '@chakra-ui/react'
import { Colors } from '../theme';

export default function NevButton({variant, text}) {
  return (
    <Button bg={variant.bg} color={variant.color} fontSize={"xs"} rounded={"lg"} className="border-red-900" shadow="md" p={5}>{text}</Button>
  )
}

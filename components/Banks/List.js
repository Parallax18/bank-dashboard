import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react';
import Card from './Card';


export default function List() {
  return (
    <Grid templateColumns={['repeat(1, 1fr)','repeat(4, 1fr)']} gap={6}>
        <Card />
        <Card />
        <Card />
        <Card />
    </Grid>
  )
}

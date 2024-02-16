import { Heading } from '@chakra-ui/react'
import {NextPage} from 'next'
import { memo } from 'react'

const Dashboard: NextPage = () => {
 return (
  <Heading as='h1' size='4xl' noOfLines={1}>
    (4xl) In love with React & Next
  </Heading>
 )
}

export default memo(Dashboard)
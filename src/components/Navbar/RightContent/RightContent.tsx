import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type Props = {
    // user:any;
}

const RightContent = (props: Props) => {
  return (
    <>
    {/* <AuthModal/> */}
    <Flex justifyContent="center" align="center">
     <AuthButtons/>
    </Flex>
    </>
  )
}

export default RightContent
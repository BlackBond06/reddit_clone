import { Community } from '@/src/atoms/communitiesAtom';
import { Box, Flex, Text, Icon, Stack } from '@chakra-ui/react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import React from 'react';

type Props = {
    communityData:Community;
}

const About = ({communityData}: Props) => {
  return (
    <Box position="sticky" top="14px">
        <Flex justify="space-between"
        align="center"
        bg="blue.400"
        color="white"
        p={1}
        borderRadius = "4px 4px 0px 0px"
        >
            <Text fontSize="10pt" fontWeight={700}>About Community</Text>
            <Icon as={HiOutlineDotsHorizontal}/>
        </Flex>
        <Flex direction="column"
        p={3}
        bg="white"
        borderRadius="0px 0px 4px 4px"
        >
          <Stack>
            <Flex width="100%" p={2} fontSize="10pt" fontWeight={700}>
                <Flex direction="column" flexGrow={1}>
                    <Text>{communityData.numberOfMembers.toLocaleString()}</Text>
                    <Text>Members</Text>
                </Flex>
                <Flex direction="column" flexGrow={1}>
                    <Text>1</Text>
                    <Text>Online</Text>
                </Flex>
            </Flex>
         </Stack>  
        </Flex>
    </Box>
  )
}

export default About
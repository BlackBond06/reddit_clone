import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { Tabitem } from './NewPostForm';

type Props = {
    item:Tabitem;
    selected:boolean;
    setSelectedTab:(value:string) => void;
}

const TabItem = ({item, selected, setSelectedTab}:{item:Tabitem, selected:boolean, setSelectedTab:(value:string) => void}) => {
  return (
    <Flex justify="center"
    align="center"
    flexGrow={1}
    p="14px 0px"
    cursor="pointer"
    fontWeight={700}
    _hover={{bg:"gray.50"}}
    color={selected ? "blue.500" : "gray.500"}
    borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0px"}
    borderBottomColor={selected ? "blue.500" : "gray.200"}
    borderRightColor="gray.200"
    onClick={()=> setSelectedTab(item.title)}
    >
    
        <Flex>
            <Icon as={item.icon}/>
        </Flex>
        <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  )
}

export default TabItem
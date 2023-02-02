import React from "react";
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" mb={1} />}
        />
        <Input placeholder="Search Reddit"
        fontSize="10pt"
        _placeholder={{color:"#777.500"}}
        _hover={{bg:"#fefefe", border:"1px solid", bgColor:"#fefefe.500", borderColor:"blue.500"}}
        _focus={{outline:"none", border:"1px solid", borderColor:"blue.500"}}
        height="34px"
        bg="gray.54"
         />
      </InputGroup>

      
    </Flex>
  );
};

export default SearchInput;

import React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { User } from "firebase/auth";

type Props = {
  user?: User | null;
};

const SearchInput = ({ user }: any) => {
  return (
    <Flex flexGrow={1} maxWidth={user ? "auto" : "600px"} mr={2} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" mb={1} />}
        />
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: "#777.500" }}
          _hover={{
            bg: "#fefefe",
            border: "1px solid",
            bgColor: "#fefefe.500",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="#f2f8fc"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;

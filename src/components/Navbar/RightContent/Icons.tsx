import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { HiOutlineSpeakerphone, } from "react-icons/hi";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const Icons = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{bg:"gray.200"}}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{bg:"gray.200"}}
        >
          <Icon as={IoFilterCircleOutline} fontSize={22}/>
        </Flex>
        <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{bg:"gray.200"}}
        >
          <Icon as={IoVideocamOutline}fontSize={22} />
        </Flex>
      </Flex>
      <>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{bg:"gray.200"}}
        >
          <Icon as={BsChatDots}fontSize={22} />
        </Flex>
      <Flex
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{bg:"gray.200"}}
        >
          <Icon as={IoNotificationsOutline}fontSize={22} />
        </Flex>
      <Flex
        display={{base:"none", md:"flex"}}
        mr={1.5}
        ml={1.5}
        padding={1}
        cursor="pointer"
        borderRadius={4}
        _hover={{bg:"gray.200"}}
        >
          <Icon as={GrAdd}fontSize={22} />
        </Flex>
      <Flex
        display={{base:"none", md:"flex"}}
        mr={1.5}
        ml={1.5}
        padding={2}
        cursor="pointer"
        borderRadius={50}
        bg="gray.100"
        >
          <Icon as={HiOutlineSpeakerphone}fontSize={22} />
          <Text fontWeight="bold" fontSize="10pt">Advertise</Text>
        </Flex>
      </>
    </Flex>
  );
};

export default Icons;

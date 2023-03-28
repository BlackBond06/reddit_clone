import { Flex, Image, MenuItem, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  displayText: string;
  link:string;
  icon: IconType;
  iconColor: string;
  imageURL?: string;
};

const MenuListItem = ({ displayText, link,  icon, iconColor, imageURL }: Props) => {
  return (
    <MenuItem
      width="100%"
      fontSize="10pt"
      _hover={{ bg: "gray.100" }}
      onClick={() => {}}
    >
      <Flex align="center">
        {imageURL ? (
          <Image src={imageURL} borderRadius="full" boxSize="18px" mr={2} />
        ) : (
          <Icon as={icon} fontSize={20} mr={2} color={iconColor} />
        )}
        {displayText}
      </Flex>
    </MenuItem>
  );
};

export default MenuListItem;
import { Post } from "@/src/atoms/postsAtom";
import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";

type Props = {
  post: Post;
  userIsCreator: boolean;
  userVoteValue: boolean;
  onVote: () => {};
  onDeletePost: () => {};
  onSelectPost: () => void;
};

const PostItem = ({
  post,
  userIsCreator,
  userVoteValue,
  onVote,
  onDeletePost,
  onSelectPost,
}: Props) => {
  return (
    <Flex
      border="1px solid"
      bg="white"
      borderColor="gray.300"
      borderRadius={4}
      _hover={{ borderColor: "gray.500" }}
      cursor="pointer"
      onClick={onSelectPost}
    >
      <Flex direction="column" 
      align="center"
       bg="gray.500"
       p={2}
       borderRadius={4}
       width="40px"
      >
        <Icon as={userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline}
        color={userVoteValue === 1 ? "brand.100" : "gray.400"}
        fontSize={22}
        onClick={onVote}
        />
        <Text fontSize="9pt">{post.voteStatus}</Text>
      </Flex>
      {post.title}
    </Flex>
  );
};

export default PostItem;

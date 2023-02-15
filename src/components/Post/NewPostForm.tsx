import { Icon } from "@chakra-ui/icon/dist/icon";
import { Flex } from "@chakra-ui/react";
import React, {useState} from "react";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import {  BiPoll } from "react-icons/bi";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import TabItem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";


type Props = {};

const formTabs:Tabitem[] = [
  {
    title: "Post",
    icon: IoDocumentText,
  },

  {
    title: "Images & Video",
    icon: IoImageOutline,
  },

  {
    title: "Link",
    icon: BsLink45Deg,
  },

  {
    title: "Poll",
    icon: BiPoll,
  },

  {
    title: "Talk",
    icon: BsMic,
  },
];

export type Tabitem = {
  title:string;
  icon: typeof Icon.arguments;
}

const NewPostForm = (props:Props) => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [textInputs, setTextInputs] = useState({
    title:"",
    body:"",
  });
  const [selectedFile, setSelectedFile] = useState<string>();


  const handleCreatePost = ()=>{}
  const onSelectImage = ()=>{}
  const onTextChange = ()=>{}


  return (
    <Flex direction="column" bg="white" borderRadius={4} mt={2}>
      <Flex width="100%">
        {formTabs.map(item =>(
          <TabItem item={item} selected={item.title === selectedTab}
          setSelectedTab={setSelectedTab}
          />
        ))}
      </Flex>
      <Flex p={4}>
        <TextInputs/>
      </Flex>
    </Flex>
  );
};

export default NewPostForm;

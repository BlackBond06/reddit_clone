import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

type Props = {};

const AuthInputs = (props: Props) => {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <LogIn />}
      {modalState.view === "signup" && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;

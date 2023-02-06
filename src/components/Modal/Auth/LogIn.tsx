import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { authModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";


type Props = {};

const LogIn = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //   firebase
  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update state

    setLoginForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        type="email"
        placeholder="email"
        mb={2}
        onChange={onChange}
        fontSize="12pt"
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
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
        mb={2}
        fontSize="12pt"
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
        bg="gray.50"
      />
      <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
        Log In
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default LogIn;

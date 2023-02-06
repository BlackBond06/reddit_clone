import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { authModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { auth } from "../../../firebase/clientApp";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";


const SignUp = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword:"",
  });

  const [error, setError] = useState("");

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);

  //   firebase logic
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(error) setError("");
    if(signUpForm.password !== signUpForm.confirmPassword){
      // setError
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update state

    setSignUpForm(prev => ({
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
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
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
     {error || userError && (<Text textAlign="center" color="red" fontSize="10pt">
      {error || userError.message} 
     </Text>)}
      <Button type="submit" width="100%" height="36px" mt={2} mb={2} isLoading={loading}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;

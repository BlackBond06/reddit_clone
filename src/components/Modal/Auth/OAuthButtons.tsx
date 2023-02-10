import {useEffect} from "react";

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../../firebase/clientApp";

const OAuthButtons = () => {
  const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);

    const  createUserDocument = async (user:User)=>{
      const userDocRef =doc(firestore, "users", user.uid);
      await(setDoc(userDocRef, JSON.parse(JSON.stringify(user))));
    }

    useEffect(()=>{

      if(userCred){
        createUserDocument(userCred.user)
      }
    }, [userCred])


  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={4}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button
        variant="oauth"
        isLoading={gitLoading}
        onClick={() => signInWithGithub()}
      >
        <Image src="/images/github_logo.png" height="30px" mr={4} />
        Continue with Github
      </Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};

export default OAuthButtons;

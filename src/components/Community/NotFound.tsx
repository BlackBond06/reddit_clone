
import { Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      align="center"
      minHeight="60vh"
    >
    
      <Link href="/">
        <Flex align="center" direction="column"
      justifyContent="center">
        <Image src="/images/telescope-snoo.png"/>
      Sorry, that community does not exist or has been banned
        <Button mt={10}>GO HOME</Button>
        </Flex>
      </Link>
    </Flex>
  );
};
export default  NotFound;
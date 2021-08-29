import React from "react";
import { firebase } from "../firebase/Firebase";
import { VStack, Button, Box, Heading, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <>
      <div>
        <Center background={"aqua"} height={"200px"}>
          <Heading>ホーム</Heading>
        </Center>
        <Box marginLeft="25px">
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </Box>
      </div>
      <VStack
        //divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="center"
      >
        <Box as="Button" rounded={80} h="160px" w="700px" bg="lightgray" marginTop="50px">
          <Link to={"/createTest"}>問題を作成する</Link>
        </Box>
        <Box as="Button" rounded={80} h="160px" w="700px" bg="lightgray" marginTop="50px">
          <Link to={"/testView"}>問題を見る</Link>
        </Box>
        <Box as="Button" rounded={80} h="160px" w="700px" bg="lightgray" marginTop="50px">
          <Link to={"/answer"}>問題に回答する</Link>
        </Box>
      </VStack>
    </>
  );
}

export default Home;

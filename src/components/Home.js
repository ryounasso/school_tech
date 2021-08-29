import React from "react";
import { firebase } from "../firebase/Firebase";
import { VStack, Box, Heading, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import './Home.css';

function Home(props) {
  return (
    <body className="bg">
      <div>
        <Center background={"cornflowerblue"} height={"200px"}>
          <Heading><font size="7">Home</font></Heading>
        </Center>
        <Box marginLeft="25px">
          <button onClick={() => firebase.auth().signOut()} className="btn_signout">Sign out</button>
        </Box>
      </div>
      <VStack
        //divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="center"
      >
        <Box as="Button" rounded={80} h="160px" w="700px" bg="lightgray" marginTop="50px">
          <Link to={"/createTest"}><font size="6">問題を作成する</font></Link>
        </Box>
        <Box as="Button" rounded={80} h="160px" w="700px" bg="lightgray" marginTop="50px">
          <Link to={"/testView"}><font size="6">問題を見る</font></Link>
        </Box>
        <Box as="Button" rounded={80} h="160px" w="700px" bg="lightgray" marginTop="50px" marginBottom="200px">
          <Link to={"/answer"}><font size="6">問題に回答する</font></Link>
        </Box>
      </VStack>
    </body>
  );
}

export default Home;

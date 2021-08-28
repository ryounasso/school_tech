import React from "react";
import { firebase } from "../firebase/Firebase";
import { VStack, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <VStack>
      <div>
        <h2>Home Page</h2>
        <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      </div>
      <Box>
        <Link to={"/createTest"}>問題を作成する</Link>
        <Link to={"/testView"}>問題を見る</Link>
      </Box>
    </VStack>
  );
}

export default Home;

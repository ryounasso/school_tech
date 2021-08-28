import React, { useState, useEffect } from "react";
import { Box, VStack, Center , Heading } from "@chakra-ui/react";
import { getQuestion } from "../api/questionApi";
import { Test } from "./Test";

export const TestView = () => {
  const [tests, setTests] = useState([]);
  let result;
  useEffect(() => {
    getQuestion().then((data) => {
      setTests(data);
    });
  }, []);

  if (tests !== []) {
    result = 1;
  }

  return (
    <>
      <Center background={"aqua"} height={"200px"}>
        <Heading background={"aqua"} >問題一覧</Heading>
      </Center>
      <Box marginLeft="25px">
      <p><font size="5">教科：日本史　学年：中学3年生</font></p> 
      </Box>
      <VStack spacing={8}>
        {result === null ? (
          <Box></Box>
        ) : (
          tests.map((test) => {
            return <Test key={test.id} props={test} />;
          })
        )}
      </VStack>
    </>
  );
};

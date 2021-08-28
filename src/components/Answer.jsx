import React, { useState, useEffect } from "react";
import { Box, VStack, Heading, Center } from "@chakra-ui/react";
import { useAuth } from "../contexts/authContext";
import { getQuestion } from "../api/questionApi";
import { Question } from "./Question";

export const Answer = () => {
  const [tests, setTests] = useState([]);
  let flag;
  useEffect(() => {
    getQuestion().then((data) => {
      setTests(data);
    });
  }, []);

  if (tests !== []) {
    flag = 1;
  }

  const { user } = useAuth();

  return (
    <>
      <Center background={"aqua"} height={"200px"}>
        <Heading background={"aqua"}>問題解答</Heading>
      </Center>
      <Box marginLeft="25px">
        <p>
          <font size="5">教科：日本史　学年：中学3年生</font>
        </p>
      </Box>
      <VStack spacing={12}>
        {flag === null ? (
          <Box></Box>
        ) : (
          tests.map((test) => {
            return <Question key={test.id} props={test} />;
          })
        )}
      </VStack>
    </>
  );
};

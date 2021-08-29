import React, { useState, useEffect } from "react";
import { Box, VStack, Heading, Center, HStack, Text } from "@chakra-ui/react";
import { useAuth } from "../contexts/authContext";
import { getQuestion } from "../api/questionApi";
import { Question } from "./Question";
import { createBrowserHistory } from "history";

export const Answer = () => {
  const [tests, setTests] = useState([]);
  const [responseNumber, setResponseNumber] = useState(0);
  const [correctNumber, setCorrectNumber] = useState(0);
  const [score, setScore] = useState(0);
  const history = createBrowserHistory();

  let flag;
  useEffect(() => {
    getQuestion().then((data) => {
      setTests(data);
    });
  }, []);

  if (tests !== []) {
    flag = 1;
  }

  const calc = () => {
    const correctAnswer = parseInt(correctNumber);
    const kai = correctAnswer * 5;
    return kai;
  };

  const { user } = useAuth();

  return (
    <>
      <Center background={"aqua"} height={"200px"}>
        <Heading background={"aqua"}>問題回答</Heading>
      </Center>
      <Box marginLeft="25px">
        <p>
          <font size="5">教科：日本史　学年：中学3年生</font>
        </p>
      </Box>
      <Center>
        <HStack>
          <VStack spacing={12}>
            {flag === null ? (
              <Box></Box>
            ) : (
              tests.map((test) => {
                return (
                  <Question
                    key={test.id}
                    props={test}
                    set={setResponseNumber}
                    correct={setCorrectNumber}
                  />
                );
              })
            )}
          </VStack>
          <Text>
            {calc()} / {parseInt(tests.length) * 5}
          </Text>
        </HStack>
      </Center>
    </>
  );
};

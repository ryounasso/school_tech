import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Heading,
  Center,
  HStack,
  Text,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/authContext";
import { getQuestion } from "../api/questionApi";
import { Question } from "./Question";

export const Answer = () => {
  const [tests, setTests] = useState([]);
  const [responseNumber, setResponseNumber] = useState(0);
  const [correctNumber, setCorrectNumber] = useState(0);
  const [toggleFlag, seToggleFlag] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const [kais, setKai] = useState(0);

  let flag;
  useEffect(() => {
    getQuestion().then((data) => {
      setTests(data);
    });
  }, []);

  useEffect(() => {
    if (toggleFlag === true) {
      onToggle();
    }
  }, [toggleFlag]);

  useEffect(() => {
    setKai(calc());
  }, [correctNumber]);

  if (tests !== []) {
    flag = 1;
  }

  const calc = () => {
    const correctAnswer = parseInt(correctNumber);
    const kai = correctAnswer * 5;
    createGood();
    return kai;
  };

  const createGood = () => {
    const correctAnswer = parseInt(correctNumber);
    const kai = correctAnswer * 5;
    const all = parseInt(tests.length) * 5;
    if ((kai / all) * 100 > 80) {
      seToggleFlag(true);
    }
  };

  const ScaleFadeEx = () => {
    return (
      <>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            Good!!!
          </Box>
        </ScaleFade>
      </>
    );
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
        <HStack spacing={20}>
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
          <VStack>
            <Text fontSize="3xl">
              {kais} / {parseInt(tests.length) * 5}
            </Text>
            {toggleFlag ? ScaleFadeEx() : null}
          </VStack>
        </HStack>
      </Center>
    </>
  );
};

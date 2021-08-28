import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  VStack,
  HStack,
  Spacer,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
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
  const [problem, setProblem] = useState("");
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [choiceC, setChoiceC] = useState("");
  const [choiceD, setChoiceD] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      problem: problem,
      choiceA: choiceA,
      choiceB: choiceB,
      choiceC: choiceC,
      choiceD: choiceD,
      result: result,
    };
    setProblem("");
    setChoiceA("");
    setChoiceB("");
    setChoiceC("");
    setChoiceD("");
    setResult("");
  };

  const handleChangePloblem = (e) => {
    setProblem(e.currentTarget.value);
  };

  const handleChangeChoiceA = (e) => {
    setChoiceA(e.currentTarget.value);
  };

  const handleChangeChoiceB = (e) => {
    setChoiceB(e.currentTarget.value);
  };

  const handleChangeChoiceC = (e) => {
    setChoiceC(e.currentTarget.value);
  };

  const handleChangeChoiceD = (e) => {
    setChoiceD(e.currentTarget.value);
  };

  const handleChangeResult = (e) => {
    setResult(e.currentTarget.value);
  };

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

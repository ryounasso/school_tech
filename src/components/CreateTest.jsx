import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/authContext";
import { addQuestion } from "../api/questionApi";
import { Heading, Center } from "@chakra-ui/react"

export const CreateTest = () => {
  const { user } = useAuth();
  const [problem, setProblem] = useState("");
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [choiceC, setChoiceC] = useState("");
  const [choiceD, setChoiceD] = useState("");
  const [result, setResult] = useState("");

  console.log(user);

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
    console.log(question);
    addQuestion({ ...question });
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
        <Heading background={"aqua"} >問題作成</Heading>
      </Center>
      <Box marginLeft="25px">
      <p><font size="5">教科：日本史　学年：中学3年生</font></p> 
      </Box>
      <Box as="form" p={20} onSubmit={handleSubmit}>
        <FormControl id="problem">
          <FormLabel>問題文</FormLabel>
          <Input
            name="problem"
            value={problem}
            placeholder="問題文"
            onChange={handleChangePloblem}
          />
        </FormControl>
        <HStack>
          <FormControl id="choices">
            <FormLabel>選択肢</FormLabel>
            <VStack>
              <Input
                name="choiceA"
                value={choiceA}
                placeholder="選択肢A"
                onChange={handleChangeChoiceA}
              />
              <Input
                name="choiceB"
                value={choiceB}
                placeholder="選択肢B"
                onChange={handleChangeChoiceB}
              />
              <Input
                name="choiceC"
                value={choiceC}
                placeholder="選択肢C"
                onChange={handleChangeChoiceC}
              />
              <Input
                name="choiceD"
                value={choiceD}
                placeholder="選択肢D"
                onChange={handleChangeChoiceD}
              />
            </VStack>
          </FormControl>
          <Spacer />
          <VStack>
            <FormControl id="result">
              <FormLabel>解答</FormLabel>
              <Input
                name="result"
                value={result}
                placeholder="解答"
                onChange={handleChangeResult}
              />
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              // isLoading={props.isSubmitting}
              type="submit"
            >
              問題を登録
            </Button>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

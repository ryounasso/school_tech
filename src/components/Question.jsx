import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";
import { addAnswer } from "../api/answerApi";

export const Question = (props) => {
  const problem = props.props;
  const [answer, setAnswer] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitAnswer = {
      problem_id: problem.id,
      answer: answer,
    };
    setAnswer(null);
    addAnswer({ ...submitAnswer });
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.currentTarget.value);
  };

  return (
    <VStack>
      <Box>問題文</Box>
      <Heading size="md">{problem.problem}</Heading>
      <HStack spacing={12}>
        <FormControl as="fieldset">
          <FormLabel as="legend">選択肢</FormLabel>
          <RadioGroup>
            <VStack spacing="24px">
              <Radio value="A" onChange={handleChangeAnswer}>
                {problem.choiceA}
              </Radio>
              <Radio value="B" onChange={handleChangeAnswer}>
                {problem.choiceB}
              </Radio>
              <Radio value="C" onChange={handleChangeAnswer}>
                {problem.choiceC}
              </Radio>
              <Radio value="D" onChange={handleChangeAnswer}>
                {problem.choiceD}
              </Radio>
            </VStack>
          </RadioGroup>
        </FormControl>
        <Spacer />
        <VStack>
          <Box>解答</Box>
          <Box>{answer}</Box>
        </VStack>
        <Button mt={2} colorScheme="teal" onClick={handleSubmit} type="submit">
          提出
        </Button>
      </HStack>
    </VStack>
  );
};

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
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { addAnswer } from "../api/answerApi";
import { getQuestionFilterdById } from "../api/questionApi";

export const Question = (props) => {
  const problem = props.props;
  const setResponseNumber = props.set;
  const setCorrectNumber = props.correct;
  const [answer, setAnswer] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitAnswer = {
      problem_id: problem.id,
      answer: answer,
    };
    setIsSubmit(true);
    setResponseNumber((prev) => prev + 1);
    // addAnswer({ ...submitAnswer });
    const trueAnswer = await getQuestionFilterdById(problem.id);
    checkCorrect(trueAnswer);
  };

  const handleChangeAnswer = (e) => {
    setAnswer(e.currentTarget.value);
  };

  const checkCorrect = (ans) => {
    if (ans === answer) {
      onToggle();
      setCorrectNumber((prev) => prev + 1);
    }
  };

  const ScaleFadeEx = (message) => {
    let color;
    if (message === "正解") {
      color = "green.300";
    } else {
      color = "blue.300";
    }

    return (
      <>
        <ScaleFade initialScale={0.1} in={isOpen}>
          <Box
            p="5px"
            // w="30px"
            color="white"
            mt="4"
            bg={color}
            rounded="md"
            shadow="md"
          >
            <i>{message}</i>
          </Box>
        </ScaleFade>
      </>
    );
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
              <Radio value={problem.choiceA} onChange={handleChangeAnswer}>
                {problem.choiceA}
              </Radio>
              <Radio value={problem.choiceB} onChange={handleChangeAnswer}>
                {problem.choiceB}
              </Radio>
              <Radio value={problem.choiceC} onChange={handleChangeAnswer}>
                {problem.choiceC}
              </Radio>
              <Radio value={problem.choiceD} onChange={handleChangeAnswer}>
                {problem.choiceD}
              </Radio>
            </VStack>
          </RadioGroup>
        </FormControl>
        <Spacer />
        <VStack>
          <Box>回答</Box>
          <Box>{answer}</Box>
        </VStack>
        {isSubmit === false ? (
          <Button
            mt={2}
            colorScheme="teal"
            onClick={handleSubmit}
            type="submit"
          >
            提出
          </Button>
        ) : (
          <Button p={6} bgcolor="gray.500">
            提出済み
          </Button>
        )}
        {isOpen ? ScaleFadeEx("正解") : ScaleFadeEx("不正解")}
      </HStack>
    </VStack>
  );
};

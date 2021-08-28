import React from "react";
import { Box, VStack, HStack, Text, Flex, Spacer } from "@chakra-ui/react";

export const Test = (props) => {
  console.log(props);
  const problem = props.props;
  return (
    <VStack>
      <HStack spacing={8}>
        <VStack>
          <Box>作成日</Box>
          <Text>{problem.createdAt.toLocaleString()}</Text>
        </VStack>
        <Spacer />
        <VStack>
          <Box>問題文・選択肢</Box>
          <Text>{problem.problem}</Text>
          <HStack>
            <Text>A. {problem.choiceA}</Text>
            <Text>B. {problem.choiceB}</Text>
            <Text>C. {problem.choiceC}</Text>
            <Text>D. {problem.choiceD}</Text>
          </HStack>
        </VStack>
        <Spacer />
        <VStack>
          <Box>解答</Box>
          <Text>{problem.result}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

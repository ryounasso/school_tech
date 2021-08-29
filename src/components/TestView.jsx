import React, { useState, useEffect } from "react";
import { Box, VStack, Center , Heading ,HStack } from "@chakra-ui/react";
import { getQuestion } from "../api/questionApi";
import { Test } from "./Test";
import { Link } from "react-router-dom";

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
      <Center background={"cornflowerblue"} height={"200px"}>
        <Heading><font size='7'>問題一覧</font></Heading>
      </Center>
      <HStack spacing="24px">
        <Box marginLeft="25px">
          <p><font size="5">教科：日本史　学年：中学3年生</font></p>
        </Box>
        <Box as="Button" w="200px" h="40px" bg="yellow.200">
          <Link to={"/createtest"}><font size="3">問題作成</font></Link>
        </Box>
        <Box as="Button" w="200px" h="40px" bg="tomato">
          <Link to={"/answer"}><font size="3">回答ページプレビュー</font></Link>
        </Box>
        <Box as="Button" w="200px" h="40px" bg="pink.100">
          <Link to={"/"}><font size="3">Homeに戻る</font></Link>
        </Box>
      </HStack>
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

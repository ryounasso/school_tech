import React, { useState, useEffect } from "react";
import { Box, VStack, Center } from "@chakra-ui/react";
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
    <Center>
      <VStack spacing={8}>
        {result === null ? (
          <Box></Box>
        ) : (
          tests.map((test) => {
            return <Test key={test.id} props={test} />;
          })
        )}
      </VStack>
    </Center>
  );
};

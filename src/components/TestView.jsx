import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { getQuestion } from "../api/questionApi";
import { Test } from "./Test";

export const TestView = () => {
  const [tests, setTests] = useState();
  useEffect(() => {
    const result = getQuestion().then((data) => {
      setTests(data);
    });
  }, []);

  return (
    <Box>
      <Box>テスト一覧画面です</Box>
      <Test />
    </Box>
  );
};

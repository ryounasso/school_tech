import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { withRouter } from "react-router";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <FormControl id="email">
      <FormLabel onSubmit={handleSubmit}>Email address</FormLabel>
      <Input type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
};

export default withRouter(SignUp);

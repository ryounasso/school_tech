import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import { Box, Button, Stack, Hstack, VStack } from "@chakra-ui/react"
import './SignUp.css'

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  // AuthContextからsignup関数を受け取る
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <Box px={200} bg="blue.200">

      <form onSubmit={handleSubmit}>
        <VStack
          //divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="center"
          padding="270px"
        >
          <h1>Sign up</h1>
          <label>
            <p>Email</p>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <p>Password</p>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit" className="btn">Sign Up</button>
        </VStack>
      </form>
    </Box>
  );
};

export default withRouter(SignUp);

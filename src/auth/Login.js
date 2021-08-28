import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import { Box, Button, Stack, Hstack, VStack } from "@chakra-ui/react"
import './Login.css';
const Login = ({ history }) => {
  const { login } = useContext(AuthContext);

  // AuthContextからlogin関数を受け取る
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value, history);
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
          <h1>Log in</h1>
          <label>
            <p>Email</p>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <p>Password</p>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </VStack>
      </form>
    </Box>
  );
};

export default withRouter(Login);

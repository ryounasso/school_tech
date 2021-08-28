import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { AuthContext } from "./AuthProvider";
import { withRouter } from "react-router";

const Login = (history) => {
  const { login } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login(email.value, password.value, history);
  };

  return (
    <Box>
      <div>ようこそschool Tehcへ</div>
    </Box>
  );
};

export default withRouter(Login);

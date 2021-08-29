import React, { useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import { Box, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom";
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
          <h1><font size="7">Log in</font></h1>
          <label>
            <p>Email</p>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            <p>Password</p>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit" className="btn">Log in</button>
          <dev className="signup">
            <p><b>アカウントをお持ちでない方</b></p>
            <Box as="Button" rounded={0} h="40px" w="200px" bg="#38A3A5" marginTop="10px" _hover={{background: "#ffffff",color: "#0808e2"}}>
              <Link to={"/SignUp"}>Sign Up</Link>
            </Box>
          </dev>         
        </VStack>
      </form>
    </Box>
  );
};

export default withRouter(Login);

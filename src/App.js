import { ChakraProvider } from "@chakra-ui/react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PravateRoute";
import Home from "./components/Home";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

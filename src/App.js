import { ChakraProvider } from "@chakra-ui/react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PravateRoute";
import Home from "./components/Home";
import { AuthProvider } from "./auth/AuthProvider";
import { CreateTest } from "./components/CreateTest";
import { TestView } from "./components/TestView";
import { Answer } from "./components/Answer";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "School Tech";
  }, []);

  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createTest" component={CreateTest} />
          <Route exact path="/testView" component={TestView} />
          <Route exact path="/answer" component={Answer} />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

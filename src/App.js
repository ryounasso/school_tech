import { ChakraProvider } from "@chakra-ui/react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PravateRoute";
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* <PrivateRoute exact path="/" component={Login} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Router>
    </ChakraProvider>
  );
}

export default App;

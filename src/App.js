import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./src/Login";

function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;

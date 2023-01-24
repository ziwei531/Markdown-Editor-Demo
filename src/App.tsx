import "./App.css";
import Input from "./components/Input";
import { Text, Center, Box, Grid, GridItem } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import breaks from "remark-breaks";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const getValue = (value: string) => {
    // console.log(value);
    setVal(value);
  };

  return (
    <Box bgColor="blue.50" className="App">
      <Box p={6}>
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <Input val={getValue} />
          <Box>
            {" "}
            <ReactMarkdown
              remarkPlugins={[breaks]}
              components={ChakraUIRenderer()}
            >
              {val}
            </ReactMarkdown>{" "}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;

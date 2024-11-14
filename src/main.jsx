import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);

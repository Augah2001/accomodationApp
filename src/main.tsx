import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./utils/theme.ts";

import { RouterProvider } from "react-router-dom";
import routes from "./Services/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={"light"} />
      <RouterProvider router={routes} />
    </ChakraProvider>
  
);

import React from "react";
import "./App.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/inter/900.css";
import Header from "./components/Header";
import MatchesContainer from "./containers/MatchesContainer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = extendTheme({
  colors: {
    primary: "#364F6B",
    light: "#3FC1C9",
    red: "#FC5185",
    black: "#070A0E",
    white: "#fff",
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
  textStyles: {
    h1: {
      fontSize: ["48px", "72px"],
      fontWeight: "extrabold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route path="/" element={<MatchesContainer />} />
          </Routes>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

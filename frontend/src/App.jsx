import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPages";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ChatPage from "./pages/chatPage";
import Groupchat from "./pages/groupchat";
import theme from "../src/theme";
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />{" "}
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/groupchat" element={<Groupchat />} />
        <Route path="/chatPage" component={<chatPage />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
};
export default App;

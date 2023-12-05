import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPages";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ChatPage from "./pages/chatPage";
import Groupchat from "./pages/groupchat";

const App = () => {
  return (
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
  );
};
export default App;

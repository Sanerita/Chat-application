import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPages";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import Privatechat from "./pages/privatechat";
import Groupchat from "./pages/groupchat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homePage" element={<HomePage />} />{" "}
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/privatechat" element={<Privatechat />} />
        <Route path="/groupchat" element={<Groupchat />} />
      </Routes>
    </Router>
  );
};
export default App;

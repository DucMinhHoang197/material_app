import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
function App() {
  return (
    <div style={{ backgroundColor: "##121212", minHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Background from "./Components/background";
import Resume from "./Components/resume";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

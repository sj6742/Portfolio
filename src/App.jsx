import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from './pages/Projects.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from './pages/Projects.jsx'
import Certificate from './pages/certificate.jsx'
import Work from '../src/pages/work.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/certificate" element={<Certificate/>}></Route>
        <Route path="/work" element={<Work/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

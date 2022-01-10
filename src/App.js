// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectProvider } from "./components/projects";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
// import Project from "./components/project";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

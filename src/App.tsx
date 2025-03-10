import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/mentors" element={<h1>Mentors Page</h1>} />
        <Route path="/investors" element={<h1>Investors Page</h1>} />
        <Route path="/startups" element={<h1>Startups Page</h1>} />
        <Route path="/articles" element={<h1>Articles Page</h1>} />
        <Route path="/videos" element={<h1>Videos Page</h1>} />
        <Route path="/community" element={<h1>Community Page</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutUs from "../components/HomeAbtus";
// import Features from "./home/Features";
// import Testimonials from "./home/Testimonials";

const HomePage: React.FC = () => {
  return (
    <div>
        <Navbar />
      <Hero />
        <AboutUs />
        <Footer />
      {/* <Features />
      <Testimonials /> */}
    </div>
  );
};

export default HomePage;

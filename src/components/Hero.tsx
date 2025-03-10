import React from "react";
import "../styles/Hero.css";
import hero from "../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Empowering Startups <br />
          <span>Through Connection and Resources</span>
        </h1>
        <p>
          At Startopia, we connect startup founders with mentors, investors, and
          service providers to foster growth and innovation. Join our vibrant
          ecosystem designed to support your entrepreneurial journey.
        </p>
        <div className="hero-buttons">
          <button className="join-btn">Join</button>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Startup Team" />
      </div>
    </section>
  );
};

export default Hero;

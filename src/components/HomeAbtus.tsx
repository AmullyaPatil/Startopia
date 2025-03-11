import React from "react";
import "../styles/HomeAbtus.css";
import homeabt from "../assets/homeabt.png";

const AboutUs: React.FC = () => {
  return (
    <section>
        {/* <h2 className="about-us-heading">Community Hub</h2> */}
        <div className="about-us">
        <div className="about-us-image">
        <img src={homeabt} alt="Network of Experts" />
      </div>
      <div className="about-us-content">
        <h2>Connect with <br /> <span>Experts Easily</span></h2>
        <p>
          Offers a thriving ecosystem for founders to engage with mentors, 
          co-founders, investors, and service providers in a collaborative community.
        </p>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;

import React from "react";
import Footer from '../ui elements/Footer'
import "../css/About.css";

const About = () => {
  return (
    <div>
      <hr className="style-eight" />
      <div className="about-container">
        <p>
          Hello! My name is Yannis and i'm a software developer based in
          Stockholm.
        </p>
        <p>
          I recently graduated from School Of Applied Technology Bootcamp and
          learned a lot about the MERN stack.
        </p>
        <p>
          Outside of coding i love traveling, photography, videography and
          Blockchain Technology.
        </p>
        <p>
          I'm originally from Antibes, south of France and moved to Stockholm
          January 2014.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

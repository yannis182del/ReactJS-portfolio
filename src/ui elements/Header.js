import React from "react";
import "../css/Header.css";
import Particles from 'react-particles-js'




const Header = () => {
  return (
    <div className="Header-container">
      <div>
        <Particles
        className="particles"
    params={{
      "particles": {
          "number": {
              "value": 55
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }} />


        <div className="Picture-container">
          <img
            className="My-picture"
            src="https://i.ibb.co/8Y2PLFN/IMG-3961.jpg"
            alt="Logo"
          />
        </div>
        <h1>Yannis Bouacida</h1>
        <h2>Software developer</h2>
      </div>
    </div>
  );
};

export default Header;



import React from "react";
import "../css/Header.css";
import Particles from "react-particles-js";
import Footer from "./Footer";

const Header = () => {
  return (
    <div className="Header-container">
      <div>
        <Particles
          className="particles"
          height="500px"
          params={{
            particles: {
              number: {
                value: 110
              },
              size: {
                value: 1
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />

        <div className="Picture-container">
          <img
            className="My-picture"
            src="https://i.ibb.co/Z1tmK2m/11206067-848741575218684-6253609628058067417-n.jpg"
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

{
  /* <a href="https://ibb.co/1Jh6Kz6"><img src="https://i.ibb.co/Z1tmK2m/11206067-848741575218684-6253609628058067417-n.jpg" alt="11206067-848741575218684-6253609628058067417-n" border="0"></a> */
}

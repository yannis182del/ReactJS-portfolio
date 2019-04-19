import React from "react"
import '../css/Header.css';
import logo from "/Users/yannisbouacida/Desktop/react-portfolio/my-app/src/IMG_3961.jpg";

const Header = () => {
    return(
   <div className="Header-container">
    <div className="Picture-container">
      <img className="My-picture" src={logo} alt="Logo" />
    </div>
   <h1>Yannis Bouacida</h1>
   <h2>Software developer</h2>
   </div>
    )
}

export default Header
import React from "react"
import '../css/Header.css';

const Header = () => {
    return(
   <div className="Header-container">
    <div className="Picture-container">
      <img className="My-picture" src="https://i.ibb.co/8Y2PLFN/IMG-3961.jpg" alt="Logo" />
    </div>
   <h1>Yannis Bouacida</h1>
   <h2>Software developer</h2>
   </div>
    )
}

export default Header
import React from "react";
import "../css/Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <SocialIcon
        url="https://www.linkedin.com/in/yannis-b-713090179/"
        style={{ height: 25, width: 25 }}
        bgColor=" #4875B4"
      />
      <SocialIcon
        url="https://github.com/yannis182del"
        network="github"
        bgColor="#211F1F"
        style={{ height: 25, width: 25, marginLeft: 10 }}
      />
      <SocialIcon
        url="https://www.instagram.com/yannis.dev/?hl=fr"
        network="instagram"
        bgColor="#4E433C"
        style={{ height: 25, width: 25, marginLeft: 10 }}
      />
    </div>
  );
};

export default Footer;

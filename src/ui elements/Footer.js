import React from "react";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 15px;
  padding: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <SocialIcon
        url="https://www.linkedin.com/in/yannis-b-713090179/"
        style={{ height: 25, width: 25 }}
        bgColor=" #4875B4"
      />
      <SocialIcon
        url="https://github.com/etherean06"
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
    </Container>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
import Toggle from "../Components/Toggler";

export const Title = styled.h1`
  font-weight: 700;
  color: white;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  color: white;
`;

const Header = ({ theme, themeToggler }) => {
  const myPicture =
    "https://i.ibb.co/Z1tmK2m/11206067-848741575218684-6253609628058067417-n.jpg";
  return (
    <div className={"Header-container"}>
        <div>
          <img className="My-picture" src={myPicture} alt="Logo" />
        </div>
        <Title>Yannis Bouacida</Title>
        <SubTitle>Software developer</SubTitle>
        <Toggle theme={theme} toggleTheme={themeToggler} />
    </div>
  );
};

export default Header;

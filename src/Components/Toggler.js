import React from "react";
import styled from "styled-components";

const ToggleTheme = styled.p`
cursor: pointer;
color: white
`
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleTheme onClick={toggleTheme}>
      {theme === `light` ? `Dark mode` : `Light mode`}
    </ToggleTheme>
  );
};

export default Toggle;

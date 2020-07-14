import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    margin: 0px 0px 10px;
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .Header-container {
    text-align: center;
    padding-bottom: 5px;
    background-color:  ${({ theme }) => theme.header};
  }

  h2 {
    color: ${({ theme }) => theme.title}
  }

  a {
    color: ${({ theme }) => theme.anchor}
  }

  hr {
    display:  ${({ theme }) => theme.hr}
  }
  `;

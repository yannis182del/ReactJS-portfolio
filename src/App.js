import React, { useState } from "react";
import "./css/index.css";
import "./css/Image.css";
import Header from "./ui elements/Header";
import AppRouter from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <button onClick={themeToggler}>Switch Theme</button>
        <Header />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
};

export default App;

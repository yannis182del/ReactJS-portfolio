import React from "react";
import "./css/index.css";
import "./css/Image.css";
import Header from "./ui elements/Header";
import AppRouter from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyle";
import { lightTheme, darkTheme } from "./Components/Themes";
import { useDarkMode } from "./hooks/useDarkMode";
import Footer from "./ui elements/Footer"

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div>
        <Header theme={theme} themeToggler={themeToggler} />
        <AppRouter />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

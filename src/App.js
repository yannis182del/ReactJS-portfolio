import React, { Component } from "react";
import "./css/index.css";
import "./css/Image.css";
import Header from "./ui elements/Header";
import AppRouter from "./Router";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppRouter />
      </div>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import { Spring, config } from "react-spring/renderprops";
import "./css/Router.css";

function AppRouter() {
  return (
    <Router>
      <div>
        <Spring from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
          {props => (
            <div style={{ width: props.number + "%" }}>
              <nav>
                <ul className="topnav">
                  <li>
                    <h4>
                      <Link to="/">About</Link>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Link to="/skills/">Skills</Link>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <Link to="/projects/">Projects</Link>
                    </h4>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </Spring>
        <Route path="/" exact component={About} />
        <Route path="/skills/" component={Skills} />
        <Route path="/projects/" component={Projects} />
      </div>
    </Router>
  );
}

export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./Router Component/About";
import Skills from "./Router Component/Skills";
import "./css/Router.css";

function Contact() {
  return <h2 className="text-contain">Find me</h2>;
}

function Projects() {
  return <h2 className="text-contain">Projects</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="topnav">
            <li>
              <h4>
                <Link to="/">About</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/about/">Skills</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/projects/">Projects</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/contact/">Find me</Link>
              </h4>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={About} />
        <Route path="/about/" component={Skills} />
        <Route path="/skills/" component={Projects} />
        <Route path="/users/" component={Contact} />
      </div>
    </Router>
  );
}

export default AppRouter;

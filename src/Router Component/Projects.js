import React from "react";
import "../css/Project.css";


const Projects = () => {
  return (
    <div className="project-containter">
      <hr className="style-eight" />
      <ul className="li-element">
        <li>
          <div className="li-container">
            <a href="https://offchainmarketcap.netlify.com/">
              {" "}
              <h3>OffChain Market Cap</h3>{" "}
            </a>
            <p className="li-p">
              OffChain Market Cap is a website that i did during one of my hack
              day at the coding bootcamp.
            </p>
            <p>
              I did it with pure Javascript and refactored it with React for
              practice.
            </p>
            <p>
              Check it out:
              <a
                className="link-project"
                href="https://offchainmarketcap.netlify.com/"
              >
                {" "}
                Here
              </a>
            </p>
          </div>
        </li>
        <li>
          <div className="li-container">
            <a href="https://devtodo.netlify.com/">
              {" "}
              <h3>Pure JS to-do App</h3>{" "}
            </a>
            <p className="li-p">
              A simple to-do app that i did with pure Javascript for an
              assignment at the coding Bootcamp
            </p>
            <p>It includes Local storage.</p>
            <p>
              Check it out:
              <a className="link-project" href="https://devtodo.netlify.com/">
                {" "}
                Here
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;

import React from "react";
import SkillsElement from "../ui elements/SkillsElements";
import "../css/Project.css";

const Projects = () => {
  return (
    <div className="project-containter">
      <hr className="style-eight" />
      <ul className="li-element">
      <li>
          <div className="li-container">
            <a target="_blank" href="https://leprixdubitcoin.com/">
              {" "}
              <h3>Le Prix Du Bitcoin</h3>{" "}
            </a>
            <div className="skills-container">
              <SkillsElement className="skills" skills="ReactJS" />
              <SkillsElement className="skills" skills="Pure CSS" />
              <SkillsElement className="skills-noDev" skills="React Hooks" />
            </div>
            <p className="li-p">
              Displaying Bitcoin's data such as prices, numbers of github forks, and countdown to the new halving using React hooks to fetch data
            </p>
            <p>
              Check it out:
              <a target="_blank" className="link-project" href="https://leprixdubitcoin.com/">
                {" "}
                Here
              </a>
            </p>
          </div>
        </li>
        <li>
          <div className="li-container">
            <a target="_blank" href="https://onchainjobs.io/">
              {" "}
              <h3>On Chain Jobs (In Progress)</h3>{" "}
            </a>
            <div className="skills-container">
              <SkillsElement className="skills" skills="ReactJS" />
              <SkillsElement className="skills" skills="NodeJS" />
              <SkillsElement className="skills" skills="Express" />
              <SkillsElement className="skills" skills="Figma" />
            </div>
            <p className="li-p">
              On Chain Jobs is a website that let you find a job in the
              blockchain industry
            </p>
            <p>
              Check it out:
              <a target="_blank" className="link-project" href="https://onchainjobs.io/">
                {" "}
                Here
              </a>
            </p>
          </div>
        </li>
        <li>
          <div className="li-container">
            <a target="_blank" href="https://offchainmarketcap.netlify.com/">
              {" "}
              <h3>Hashdrops Market Cap</h3>{" "}
            </a>
            <div className="skills-container">
              <SkillsElement className="skills" skills="ReactJS" />
              <SkillsElement className="skills" skills="CSS" />
              <SkillsElement className="skills-noDev" skills="AdobeXd" />
              <SkillsElement className="skills" skills="HTML" />
            </div>
            <p className="li-p">
              Hashdrops is a website that i did during one of my hack day at the
              coding bootcamp.
            </p>
            <p>
              I did it with pure Javascript and refactored it with React for
              practice.
            </p>
            <p>
              Check it out:
              <a target="_blank" className="link-project" href="https://offchainmarketcap.netlify.com/">
                {" "}
                Here
              </a>
            </p>
          </div>
        </li>
        <li>
          <div className="li-container">
            <a  target="_blank" href="https://devtodo.netlify.com/">
              {" "}
              <h3>Pure JS to-do App</h3>{" "}
            </a>
            <div className="skills-container">
              <SkillsElement className="skills" skills="ReactJS" />
              <SkillsElement className="skills" skills="CSS" />
              <SkillsElement className="skills" skills="HTML" />
              <SkillsElement className="skills-noDev" skills="AdobeXd" />
            </div>
            <p className="li-p">
              A simple to-do app that i did with pure Javascript for an
              assignment at the coding Bootcamp
            </p>
            <p>It includes Local storage.</p>
            <p>
              Check it out:
              <a target="_blank" className="link-project" href="https://devtodo.netlify.com/">
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

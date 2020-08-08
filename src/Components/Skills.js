import React from "react";
import "../css/Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="project-container">
        <div className="front-end">
          <p className="front-end-p">Front-End:</p>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>CSS</li>
            <li>Material UI</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className="backend">
          <p className="backend-p">Back-end:</p>
          <ul>
            <li>Node.JS</li>
            <li>Express</li>
            <li>SQL/PostgreSQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="other-skills">
          <p className="other-skills-p">Other skills:</p>
          <ul>
            <li>NPM</li>
            <li>Jest/Mocha</li>
            <li>Agile methodology</li>
            <li>MOB programming</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import "../css/Project.css";

const Projects = () => {
  return (
    <div>
      <ul className="li-element">
        <li>
          <div className="li-container">
            <img
              className="li-img"
              src="https://i.ibb.co/VLT89dn/Capture-d-e-cran-2019-04-20-a-14-38-30.png"
              height="200"
              width="300"
              alt="Logo"
            />
            <p className="li-p">
              Offchain Market cap is a project that i did during my coding
              bootcamp.
              <p>
                It's a website where you can check the latest prices of Proof of
                work and Proof of stake crypto currencys
              </p>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;

import React from "react";
import "../css/SkillsElements.css";

const SkillsElement = props => {
  return (
    <React.Fragment>
      <span className={props.className}>{props.skills}</span>
    </React.Fragment>
  );
};

export default SkillsElement;

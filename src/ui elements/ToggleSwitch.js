import React, { Component } from "react";
import Switch from "react-switch";
import "../css/index.css";

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false, backgroundColor: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked, backgroundColor: !this.state.backgroundColor });
  }

  render() {
    return (
      <label>
        <span className={this.state.backgroundColor ? "red" : "toggle"}>
          Switch with default style
        </span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}

export default SwitchExample;

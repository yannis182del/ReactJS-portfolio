import React from "react";
import "../css/Header.css";

class Header extends React.Component {
  state = {
    backgroundColor: false
  };

  switchBackground = () => {
    this.setState({
      backgroundColor: !this.state.backgroundColor
    });
  };

  render() {
    return (
      <div
        className={
          this.state.backgroundColor
            ? "Header-container_black"
            : "Header-container_blue"
        }
      >
        <div>
          <div className={"Picture-container"}>
            <img
              onClick={this.switchBackground}
              className="My-picture"
              src="https://i.ibb.co/Z1tmK2m/11206067-848741575218684-6253609628058067417-n.jpg"
              alt="Logo"
            />
          </div>
          <h1>Yannis Bouacida</h1>
          <h2>Software developer</h2>
        </div>
      </div>
    );
  }
}

export default Header;

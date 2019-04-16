import React, { Component } from "react";
import "./style.css";

class SlideShowButton extends Component {
  render() {
    let arrowDirection = this.props.dir;
    let arrowButtonClassName = `fas fa-arrow-circle-${arrowDirection}`;
    return (
      <div className="slideShowButton">
        <i onClick={this.props.handleClick} className={arrowButtonClassName} />
      </div>
    );
  }
}

export default SlideShowButton;

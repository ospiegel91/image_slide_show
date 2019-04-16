import React, { Component } from "react";
import "./style.css";

import SlideShowButton from "./components/slideShowButtonComponent/SlideShowButton";
import Screen from "./components/screenComponent/Screen";

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.state = {
      currentImageID: 1
    };
  }

  nextImage() {
    let imageIdPlusOne = this.state.currentImageID + 1;
    let newCurrentImageID = ((imageIdPlusOne > 5) ? 1 : imageIdPlusOne);
    this.setState({
        currentImageID: newCurrentImageID,
    });
  }

  prevImage() {
    let imageIdMinusOne = this.state.currentImageID - 1;
    let newCurrentImageID = ((imageIdMinusOne === 0) ? 5 : imageIdMinusOne);
    this.setState({
        currentImageID: newCurrentImageID,
    });
  }

  render() {
    return (
      <div className="row slideShowContainer">
        <SlideShowButton handleClick={this.prevImage} dir={"left"} />
        <Screen currentImageID={this.state.currentImageID} />
        <SlideShowButton handleClick={this.nextImage} dir={"right"} />
      </div>
    );
  }
}

export default SlideShow;

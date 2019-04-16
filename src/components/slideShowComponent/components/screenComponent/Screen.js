import React, { Component } from "react";
import "./style.css";

class Screen extends Component {
  render() {

    let selectedImage = require(`./resources/images/photo_${
      this.props.currentImageID
    }.jpeg`);

    let styles = {
        backgroundImage: 'url(' + selectedImage + ')',
    }

    return <div style={styles} className="col-7 col-sm-9 col-md-6 screen"/>;
  }
}

export default Screen;

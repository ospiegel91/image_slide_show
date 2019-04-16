import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../../actions/slideShowActions';

import "./style.css";

import SlideShowButton from "./components/slideShowButtonComponent/SlideShowButton";
import Screen from "./components/screenComponent/Screen";

class SlideShow extends Component {
  render() {
      let currentImageID = this.props.currentImageID;
    return (
      <div className="row slideShowContainer">
        <SlideShowButton handleClick={() => this.props.prevImage(currentImageID.currentImageID)} dir={"left"} />
        <Screen currentImageID={currentImageID} />
        <SlideShowButton handleClick={() => this.props.nextImage(currentImageID.currentImageID)} dir={"right"} />
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        currentImageID: state.currentImageID
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({nextImage: nextImage, prevImage: prevImage},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SlideShow);

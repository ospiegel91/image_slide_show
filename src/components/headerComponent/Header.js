import React, { Component } from 'react';
import './style.css';

import SocialMediaButton from './components/socialMediaButtonComponent/SocialMediaButton';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">Peleg Levy</h1>
        <div className="socialMediaButtonsGroup">
            <SocialMediaButton/>
            <SocialMediaButton/>
            <SocialMediaButton/>
        </div>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import './App.css';

import Header from './components/headerComponent/Header';
import SlideShow from './components/slideShowComponent/SlideShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SlideShow/>
      </div>
    );
  }
}

export default App;

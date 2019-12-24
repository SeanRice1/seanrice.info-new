import React, { Component } from 'react';

import Intro from './components/header/header'
import Content from './components/content'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;

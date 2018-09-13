import React, { Component } from 'react';

import Intro from './components/meta/intro'
import Content from './components/meta/content'
import Footer from './components/meta/footer'

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

import React from 'react';
import ReactGA from 'react-ga';

import Intro from './components/header/header';
import Content from './components/content';
import Footer from './components/footer/footer';

ReactGA.initialize('UA-156886618-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <div>
    <Intro />
    <Content />
    <Footer />
  </div>
);

export default App;

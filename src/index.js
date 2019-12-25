import React from 'react';
import ReactDOM from 'react-dom';
import './styling/css/index.css';
import './styling/css/custom.css';
import './styling/css/bulma-styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

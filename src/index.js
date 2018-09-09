import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import './styling/custom.css'
import 'bulma/css/bulma.css'
//import './styling/debug.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

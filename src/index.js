import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Views/css/admin.css';
import './components/Views/css/bulma.css';
import './components/Views/css/landing.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

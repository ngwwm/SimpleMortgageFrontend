import 'bootstrap/dist/css/bootstrap.css';
import "core-js/stable";
import "regenerator-runtime/runtime";   
import "whatwg-fetch";                  /* ployfill window.fetch() to support IE */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
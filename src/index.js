import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
 );
//Vi essa solução no Slack mas não entendi muito bem ainda, esta adicionado na minha lista de perguntar.
serviceWorker.unregister();

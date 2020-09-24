import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./Module/Store/Store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ChacheSys } from "./Module/Sys/CacheSys";

async function main() {

  const chacheSys = new ChacheSys();

  await chacheSys.faReloadCache();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
  console.log('service woeker');

}

main();

import { createMemoryNavigation, mount, route } from 'navi';
import { Router } from 'react-navi';
import HelmetProvider from 'react-navi-helmet-async';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const routes = mount({
  '/': route({
    title: 'My Great Page',
    head: <>
      	<meta name="description" content="My Great description" />
    	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>,
    view: <App /> 
  })
})

ReactDOM.render(
  <React.StrictMode>
  	<HelmetProvider>
    	<Router routes={routes} />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

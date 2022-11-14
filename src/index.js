import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryNavigation, mount, route } from 'navi';
//import { Router } from 'react-navi';
//import HelmetProvider from 'react-navi-helmet-async';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from './App';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

const routes = mount({
  '/': route({
    title: 'myTypography',
    head: <>
      <meta name="description" content="My Great description" />
    	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>,
    view: <App /> 
  })
})

/*
ReactDOM.render(
  <React.StrictMode>
  	<HelmetProvider>
    	<Router routes={routes} basename="/mytypography" />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render((
  <BrowserRouter basename="/mytypography">
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

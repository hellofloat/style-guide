'use strict';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/custom.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
// console.log(App);
// import Layout from './layout';
// import Component from './components/component';

ReactDOM.render(  
    <App />,
    document.getElementById('app')
);
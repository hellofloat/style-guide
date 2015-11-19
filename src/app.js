'use strict';

import React from 'react';
// import { Router, Route, Link } from 'react-router';


import Signup from './components/signup';
// import SuccessPage from '/components/success.jsx';
// import './components/signup.css';

export default class App extends React.Component {

    render() {

        return (
            <div className="ui container">
                <br /><br />

                <Signup />
            </div>
        );
    }
} 
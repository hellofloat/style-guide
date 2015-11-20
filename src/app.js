'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'

import Signup from  './components/signup';
import Login from   './components/login';
import Profile from './components/profile';

export default class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <br />
                <h2>Float Web/Mobile Platform</h2>

                <Router>
                    <Route path="/" component={Signup} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                </Router>
            </div>
        );
    }
} 
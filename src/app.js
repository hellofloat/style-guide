'use strict';

import React from 'react';
// import { Router, Route, Link } from 'react-router';





// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
// render((
// <Router>
//     <Route path="/" component={App}>
//         <Route path="about" component={About}/>
//         <Route path="users" component={Users}>
//             <Route path="/user/:userId" component={User}/>
//         </Route>
//         <Route path="*" component={NoMatch}/>
//     </Route>
// </Router>
// ), document.body)
import { Router, Route, Link } from 'react-router'

import Signup from  './components/signup';
import Login from   './components/login';
import Profile from './components/profile';



// import SuccessPage from '/components/success.jsx';
// import './components/signup.css';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Signup} />
                <Route path="/Signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
            </Router>
        );
    }
} 
'use strict';

import React from 'react';
import superagent from 'superagent';


export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tos: props.initialTOS};
        this.validation = false;
    }

    onCheckTOS() {
        var tos = this.state.tos == '' ? 'checked' : '';
        this.setState({tos: tos});
    }

    validationMessage() {
        return (
            <div className="ui basic red pointing prompt label transition visible">
                Please enter your email
            </div>
        );
    }

    onClickSignUp() {
        var email = this.refs.email.value;

        if(email.length == 0) {
            this.validation = true;
            this.forceUpdate();

            // alert('please enter an email');
            return;
        }

// console.log(superagent);
console.log(email);
        var input = {
            email: email
        };
console.log(input);

console.log(document.cookies);

//             superagent
//                 .post('https://qa-api.hellofloat.com:4443/user')
//                 .send(input)
//                 .end(function(error, res) {
// console.log(res.body);
//                 });
    }

    render() {

        var logostyle = {
            width: "30px"
        };

        var validation = this.validation ? this.validationMessage() : '';
        var fieldClass = this.validation ? 'field error' : 'field';

        return (
            <div className="signup row ui segment raised teal tall">
                <div className="ui top attached menu teal">
                    <div className="ui icon item">
                        <img src="img/logo-medium.png" style={logostyle} />
                    </div>

                    <div className="ui icon item right floated">
                        Sign Up Form
                    </div>
                </div>
                <div className="ui bottom attached tertiary segment">
                    <div className="ui form">
                        <div className={fieldClass}>
                            <label>Email</label>

                            <div className="ui left icon input">
                                <input type="text" placeholder="your@email.com" ref="email" />
                                <i className="mail outline icon"></i>
                            </div>

                            {validation}

                        </div>

                        <div className="inline field">
                            <div className="ui checkbox" onClick={this.onCheckTOS.bind(this)}>
                                <input type="checkbox" tabIndex="0" className="hidden" checked={this.state.tos} />
                                <label>I agree to the terms and conditions</label>
                            </div>
                        </div>
                        
                        <div className="field">
                            <button className="ui teal button" onClick={this.onClickSignUp.bind(this)}>Sign Up</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

Signup.propTypes = { initialTOS: React.PropTypes.string };
Signup.defaultProps = { initialTOS: '' };
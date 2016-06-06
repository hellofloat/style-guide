'use strict';

import React from 'react';
import superagent from 'superagent';

// import floatSDK from 'float';
// const float = floatSDK.Float;

// http://elemental-ui.com/misc

export default class Signup extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {tos: props.initialTOS};
        this.validation = false;

        // float.init({
        //     hosts: {
        //         passwords: "qa-api.hellofloat.com:4443",
        //         users: "qa-api.hellofloat.com:4443"
        //     },
        // });
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

        // simple email regexp
        var re = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');

        if(email.length == 0 || !re.test(email)) {
            this.validation = true;
            this.forceUpdate();

            // alert('please enter an email');
            return;
        }

        var input = {
            email: email
        };


        superagent
            .post('https://qa-api.hellofloat.com:4443/user')
            .send(input)
            .end(function(error, res) {
                if(error) {
                    if(error.status == 400) {

                        superagent
                            .post('https://qa-api.hellofloat.com:4443/login')
                            .send(input)
                            .end(function(error, res) {
                                if(error) {
                                    // console.log(error);
                                    return;
                                }

                                var user = res.body;

                                if(user.email == input.email) {
                                    document.location.assign("/#/profile?email="+input.email);

                                    // alert('found user');
                                }

                                // console.log(user);
                            })
                    }


                    // console.log('error ------------------------------------')
                    // console.log(Object.keys(error))
                    // console.log(error);
                    // console.log(error.original);
                    // console.log(error.response);
                    // console.log(error.status);
                    // 
                    // status - 400
                    // 
                    // 
                    return;
                }

                document.location.assign("/#/profile?email="+input.email);
                // console.log(res.body);
            });


        // float.createUser({
        //     email: "test+1@hellofloat.com"
        // }, function(error, user) {
        //     if (error) {

        //         float.login({
        //             email: "test+1@hellofloat.com"
        //         }, function(error, user) {
        //             if(error) {
        //                 console.log(error);
        //                 return;
        //             }

        //             console.log('login user');
        //             console.log(user);

        //             document.location.assign("/#/profile?email=test+1@hellofloat.com");
        //         });

        //         return;
        //     }

        //     console.log('Created user:');
        //     console.log(user);
        // });
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
Signup.contextTypes = { router: function() { return React.PropTypes.func.isRequired; } };

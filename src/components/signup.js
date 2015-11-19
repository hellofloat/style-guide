'use strict';

import React from 'react';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tos: props.initialTOS};
    }

    onCheckTOS() {
        var tos = this.state.tos == '' ? 'checked' : '';
        this.setState({tos: tos});
    }

    render() {

        var logostyle = {
            width: "30px"
        };

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
                        <div className="field">
                            <label>Email</label>

                            <div className="ui left icon input">
                                <input type="text" placeholder="your@email.com" />
                                <i className="mail outline icon"></i>
                            </div>

                            {/*
                            <div className="ui icon input">
                                <input type="text" placeholder="you@host.com" />
                                <i className="inverted circular mail outline icon"></i>
                            </div>
                            */}
                        </div>

                        <div className="inline field">
                            <div className="ui checkbox" onClick={this.onCheckTOS.bind(this)}>
                                <input type="checkbox" tabIndex="0" className="hidden" checked={this.state.tos} />
                                <label>I agree to the terms and conditions</label>
                            </div>
                        </div>
                        
                        <div className="field">
                            <button className="ui teal button">Sign Up</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

Signup.propTypes = { initialTOS: React.PropTypes.string };
Signup.defaultProps = { initialTOS: '' };
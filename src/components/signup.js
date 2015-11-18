'use strict';

import React from 'react';

export default class Signup extends React.Component {

    render() {

        var logostyle = {
            width: "30px"
        };

        return (
            <div className="signup row ui segment raised teal tall">

                <div className="ui top attached menu teal">

                    <div className="ui icon item right floated">
                        Sign Up Form
                    </div>


                    {/*
                    <div className="ui icon item">
                        <i className="calculator icon"></i>
                    </div>

                    <div className="ui icon item">
                        <i className="camera retro icon"></i>
                    </div>

                    <div className="ui icon item">
                        <i className="calculator icon"></i>
                    </div>

                    <div className="ui icon item">
                        <i className="gift icon"></i>
                    </div>

                    <div className="ui icon item">
                    <img src="img/logo-medium.png" style={logostyle} />
                    </div>
                    */}

                    {/*menu bar items can go here*/}

                </div>
                <div className="ui bottom attached tertiary segment">




                    <div className="ui form">
                        
                        <div className="field">
                            <label>Email</label>

                            <div className="ui icon input">
                                <input type="text" placeholder="you@host.com" />
                                <i className="inverted circular mail outline icon"></i>
                            </div>

                        </div>

                        <br />

                        <div className="inline field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabindex="0" className="hidden" />
                                <label>I agree to the terms and conditions</label>
                            </div>
                        </div>

                    </div>


                    {/*
                    <div className="ui left labeled button" tabindex="0">
                        <a className="ui basic right pointing label">
                        2,048
                        </a>
                        <div className="ui button">
                            <i className="heart icon"></i> Like
                        </div>
                    </div>

                    <button className="button-primary">Join the waiting list</button>
                    */}

                </div>
            </div>
        );
    }
}
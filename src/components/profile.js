'use strict';

import React from 'react';

export default class Signup extends React.Component {
    render() {

        var rightColumn = {float:"right"};

        return (
            <div className="signup row ui segment raised teal tall">

<div className="ui three column grid stackable">
    <div className="column">

        <div className="ui card">
            <div className="image">
                <img src="img/image.png" />
            </div>
            <div className="content">
                <a className="header">{'{username}'}</a>
                <div className="meta">
                    <span className="date">{'Joined in 2015'}</span>
                </div>
                <div className="description">
                    {'Lorem Ipsum'}
                </div>
            </div>
            <div className="extra content">
                <a>
                <i className="dollar icon"></i>
                850
                </a>
            </div>
        </div>




    </div>
    <div className="column" align="center">
        
        <div className="ui card teal" align="left">
            <div className="content">
                
                <i className="right floated calculator icon"></i>
                <i className="right floated plus icon"></i>

                <div className="header">Add Bank Account</div>
                <div className="description">
                    <div className="ui inverted segment">
                    <div className="ui inverted relaxed divided list">
                        <div className="item">
                            <div className="content">
                                <div className="header">American Express</div>
                                No MFA
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Bank of America</div>
                                Question-based MFA
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Capital One 360</div>
                                Question-based MFA
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Fidelity</div>
                                No MFA
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">TD Bank</div>
                                Question-based MFA
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">US Bank</div>
                                Question-based MFA
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Wells Fargo</div>
                                No MFA
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/*
            <div className="extra content">
                <span className="left floated like">
                    <i className="like icon"></i>
                    Like
                    </span>
                    <span className="right floated star">
                    <i className="star icon"></i>
                    Favorite
                </span>
            </div>
            */} 
        </div>


    </div>
    <div className="column" align="right">

<div className="ui cards" align="left">
    <div className="card">
        <div className="content">
            <div className="header">Statement</div>
            <div className="description">
                Download your statement 
            </div>
        </div>
        <div className="ui bottom attached button">
            <i className="browser icon"></i>
            Download
        </div>
    </div>
    <div className="card">
        <div className="content">
            <div className="header">Statistics</div>
            <div className="description">
                Breakdown of your transactions
            </div>
        </div>
        <div className="ui bottom attached button">
            <i className="line chart icon"></i>
            view analysis
        </div>
    </div>
    <div className="card">
        <div className="content">
            <div className="header">Transfer</div>
            <div className="description">
                Transfer money to another account
            </div>
        </div>
        <div className="ui bottom attached button">
            <i className="payment icon"></i>
            Transfer
        </div>
    </div>
</div>

    </div>
</div>


            </div>
        );
    }
}


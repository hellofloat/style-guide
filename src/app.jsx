// this wil be where the router goes, if we decide to use react-router
'use strict';

import React from 'react';

import './components/component.css';

export default class App extends React.Component {
    render() {

        var styles = {
            color1: {
                backgroundColor: "#30BCC0"
            },
            color2: {
                backgroundColor: "#2789A0"
            },
            color3: {
                backgroundColor: "#447B96"
            }
        }


        var divStyle = {
            backgroundColor: "#30BCC0",
            height: "100px"
        };

        var br = '\u00a0';

        return (
            <div className="container">
                <section className="header">
                    <h3 className="docs-header">Float Style Guide</h3>
                </section>

                <div className="docs-section">
                    <h6 className="docs-header">Typography</h6>

                    <h1>Heading</h1>
                    <h2>Heading</h2>
                    <h3>Heading</h3>
                    <h4>Heading</h4>
                    <h5>Heading</h5>
                    <h6>Heading</h6>

                    <p>The base type is 15px over 1.6 line height (24px)</p>

                    <strong>Bolded</strong><br />
                    <em>Italicized</em><br />
                    <a>Colored</a><br />
                    <u>Underlined</u><br />

                </div>

                <div className="docs-section">
                    <h6 className="docs-header">Colors</h6>
                    
                    
                        <div className="row">
                            <div className="three columns">
                                <div className="pl-palette">
                                    <div className="pl-palette-color">
                                        <div className="pl-palette-preview" style={styles.color1}></div>
                                        {/*<div className="pl-palette-variable">@brand-primary</div>*/}
                                        <div className="pl-palette-value">#30BCC0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="three columns">
                                <div className="pl-palette">
                                    <div className="pl-palette-color">
                                        <div className="pl-palette-preview" style={styles.color2}></div>
                                        {/*<div className="pl-palette-variable">@brand-primary</div>*/}
                                        <div className="pl-palette-value">#2789A0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="three columns">
                                <div className="pl-palette">
                                    <div className="pl-palette-color">
                                        <div className="pl-palette-preview" style={styles.color3}></div>
                                        {/*<div className="pl-palette-variable">@brand-primary</div>*/}
                                        <div className="pl-palette-value">#2789A0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="three columns">
                                <div className="pl-palette">
                                    <div className="pl-palette-color">
                                        <div className="pl-palette-preview" style={styles.color3}></div>
                                        {/*<div className="pl-palette-variable">@brand-primary</div>*/}
                                        <div className="pl-palette-value">#2789A0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    


                </div>

                <div className="docs-section">
                    <h6 className="docs-header">Grid</h6>

                    <div className="example-grid docs-example">
                        <div className="row">
                            <div className="one column">One</div>
                            <div className="eleven columns">Eleven</div>
                        </div>
                        <div className="row">
                            <div className="two columns">Two</div>
                            <div className="ten columns">Ten</div>
                        </div>
                        <div className="row">
                            <div className="three columns">Three</div>
                            <div className="nine columns">Nine</div>
                        </div>
                        <div className="row">
                            <div className="four columns">Four</div>
                            <div className="eight columns">Eight</div>
                        </div>
                        <div className="row">
                            <div className="five columns">Five</div>
                            <div className="seven columns">Seven</div>
                        </div>
                        <div className="row">
                            <div className="six columns">Six</div>
                            <div className="six columns">Six</div>
                        </div>
                        <div className="row">
                            <div className="seven columns">Seven</div>
                            <div className="five columns">Five</div>
                        </div>
                        <div className="row">
                            <div className="eight columns">Eight</div>
                            <div className="four  columns">Four</div>
                        </div>
                        <div className="row">
                            <div className="nine columns">Nine</div>
                            <div className="three columns">Three</div>
                        </div>
                        <div className="row">
                            <div className="ten columns">Ten</div>
                            <div className="two columns">Two</div>
                        </div>
                        <div className="row">
                            <div className="eleven columns">Eleven</div>
                            <div className="one column">One</div>
                        </div>
                    </div>


                </div>


                <div className="docs-section">
                    <h6 className="docs-header">Buttons</h6>

                    <a className="button" href="#">Anchor button</a>{br}
                    <button>Button element</button>{br}
                    <input type="submit" value="submit input" />{br}
                    <input type="button" value="button input" />{br}


                    <a className="button button-primary" href="#">Anchor button</a>{br}
                    <button className="button-primary">Button element</button>{br}
                    <input className="button-primary" type="submit" value="submit input" />{br}
                    <input className="button-primary" type="button" value="button input" />{br}
                </div>

                <div className="docs-section">
                    <h6 className="docs-header">Forms</h6>

                    <form>
                        <div className="row">
                            <div className="six columns">
                                <label htmlFor="exampleEmailInput">Your email</label>
                                <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
                            </div>
                            <div className="six columns">
                                <label htmlFor="exampleRecipientInput">Reason for contacting</label>
                                <select className="u-full-width" id="exampleRecipientInput">
                                    <option value="Option 1">Questions</option>
                                    <option value="Option 2">Admiration</option>
                                    <option value="Option 3">Can I get your number?</option>
                                </select>
                            </div>
                        </div>
                        <label htmlFor="exampleMessage">Message</label>
                        <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
                        <label className="example-send-yourself-copy">
                            <input type="checkbox" />
                            <span className="label-body">Send a copy to yourself</span>
                        </label>
                        <input className="button-primary" type="submit" value="Submit" />
                    </form>
                </div>


                <div className="docs-section">
                    <h6 className="docs-header">Lists</h6>

                    <ul>
                      <li>Item 1</li>
                      <li>
                        Item 2
                        <ul>
                          <li>Item 2.1</li>
                          <li>Item 2.2</li>
                        </ul>
                      </li>
                      <li>Item 3</li>
                    </ul>
                </div>


                <div className="docs-section">
                    <h6 className="docs-header">Code</h6>

                    <pre>
                    <code>
                    'use strict';<br /><br />

                    import './styles/normalize.css';<br />
                    import './styles/skeleton.css';<br />
                    import './styles/custom.css';<br /><br />

                    import React from 'react';<br />
                    import ReactDOM from 'react-dom';<br /><br />

                    import App from './app.jsx';<br /><br />

                    {/* this is the way code works React */}
                    ReactDOM.render(<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;App /&gt;,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('app')<br />
                    );<br />

                    {/*// cannot add React code here even with comment lines.<br />*/}
                    {/*<div dangerouslySetInnerHTML={{__html: "ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));"}}>
                    </div>*/}
                    </code>
                    </pre>
                </div>


                <div className="docs-section">
                    <h6 className="docs-header">Table</h6>

                    <table className="u-full-width">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dave Gamache</td>
                                <td>26</td>
                                <td>Male</td>
                                <td>San Francisco</td>
                            </tr>
                            <tr>
                                <td>Dwayne Johnson</td>
                                <td>42</td>
                                <td>Male</td>
                                <td>Hayward</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        );
    }
}
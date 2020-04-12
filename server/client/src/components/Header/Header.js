import React, { Component } from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { render } from "react-dom";
import {defaultLogger, consoleMessageWithValue, entryMarker, exitMarker} from '../Util/Logger/Logger';

class Header extends Component{

    constructor(props){
        super(props);
        const COMPONENT_NAME='HEADER';
        consoleMessageWithValue(COMPONENT_NAME, 'Window locaiton ', window.location.pathname);
        consoleMessageWithValue(COMPONENT_NAME, 'Constructor props ',props );
    }

    state={
        accountId:'',
        accountName:'',
        accountKey:'',
        isAdmin:false
    }

    renderContentHandler(){
        entryMarker('Header', 'renderContentHandler');

        exitMarker('Header', 'renderContentHandler');
    };

    rerouteHandler(){
        entryMarker('Header', 'rerouteHandler');

        exitMarker('Header', 'rerouteHandler');
    };

    render(){
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        LogNl
                    </Link>
                    
                    <ul className="right hide-on-med-and-down">
                        <li id="nav-mobile">
                            {this.renderContentHandler()}
                        </li>

                       <li id="nav-mobile"><Link to="/create" className="right hide-on-med-and-down">Create Exercise</Link>
                       </li>
                       <li id="nav-mobile"><Link to="/edit" className="right hide-on-med-and-down">Edit Exercise</Link>
                       </li>
                       <li id="nav-mobile"><Link to="/addaccount" className="right hide-on-med-and-down">Add Account</Link>
                       </li>
                    </ul>
                    {/* <Link to="/create" className="right hide-on-med-and-down">Create Exercise</Link>
                    <Link to="/edit" className="right hide-on-med-and-down">Edit Exercise</Link> */}

                    </div>
                </nav>
            </div>
        );
    };
};

export default Header;

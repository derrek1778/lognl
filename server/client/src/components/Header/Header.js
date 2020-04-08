import React, { Component } from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { render } from "react-dom";
import {defaultLogger, entryMarker, exitMarker} from '../Util/Logger/Logger';

class Header extends Component{

    renderContentHandler(){
        entryMarker('Header', 'renderContentHandler');

        exitMarker('Header', 'renderContentHandler');
    };

    rerouteHandler = () =>{
        entryMarker('Header', 'rerouteHandler');

        switch(this.props.user){

            case null:
                return(
                    <li>
                        Not Sure
                    </li>
                );
            case false:
                return (
                    <li>
                        Login
                    </li>
                );
            default:
                return (
                    <li>
                        Logout
                    </li>
                )
        };

        exitMarker('Header', 'rerouteHandler');
    };

    render(){
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                    <Link
                        to={this.rerouteHandler}
                        className="brand-logo left"
                    >
                        LogNl
                    </Link>
                    
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        {this.renderContentHandler()}
                    </ul>
                    </div>
                </nav>
            </div>
        );
    };
};

export default Header;

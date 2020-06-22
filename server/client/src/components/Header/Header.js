import React, { Component} from "react";

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {} from 'react-router'

//actions
import {clearOut} from '../../actions/accountActions'

//import css
import 'materialize-css/dist/css/materialize.min.css';
import HeaderContent from "./containers/HeaderContent";

class Header extends Component{

    clearOutHandler = () => {
        console.log('[Header.js] clearOutHandler')
         this.props.clearOut();
         this.props.history.push( {pathname: '/'});
    }

    
    render(){


        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        LogNl
                    </Link>
                    
                    <ul className="right hide-on-med-and-down">
                            <HeaderContent
                                userType={this.props.isAdmin}
                                clicked={() => this.clearOutHandler()}
                                account={this.props.accounts}/>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    };


    
};

const  mapStateToProps = (state, props) =>(   
    {
        accounts: state.authenticationReducer.account,
        isAdmin: state.authenticationReducer.isAdmin,
        accountValid:  state.authenticationReducer.accountValid,
    } 
);

const mapDispatchtoProps = dispatch => ({
    //console.log('Header.js called mapDispatch ', dispatch);
    //console.log('Header.js called mapDispatch ownProp ', ownProp);
   // return {
        clearOut: () => dispatch(clearOut())
    //}
});


export default connect(mapStateToProps, mapDispatchtoProps) (Header);

import React from 'react';
import {Link} from 'react-router-dom';


const HeaderContent = (props) => {
    console.log('HeaderContent.js props ', props);
    switch(props.userType){
        case true: {
            return (
                <li id="nav-mobile">
                     {/* {localState.accountId} */}
                    <Link to="/" className="right">Clear Out</Link>
                </li>
            );
        }
        case false:{
            return (
                <li id="nav-mobile">
                    {/* localState.accountId */}
                    <a href="" className="right" onClick={props.dispatchProp}>Clear Out</a>
                </li>
            );
        }
        default:
            return(
                <li id="nav-mobile">
                    enter account key
                   
                </li>
            );

    };
}

export default HeaderContent;
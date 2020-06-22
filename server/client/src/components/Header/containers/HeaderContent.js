import React from 'react';
import {Link} from 'react-router-dom';



const HeaderContent = (props) => {
    console.log('HeaderContent.js props ', props);
    console.log('[HeaderContent.js] dispatch  ', props.dispatch)

    
        switch(props.userType){
            
            case true: {
                return (
                    <div>
                        <li id="nav-mobile">
                            {props.account.accountId}
                            {/* <Link to="/" className="right">Clear Out</Link> */}
                        </li>
                        <li id="nav-mobile" 
                            onClick={ props.clicked}>
                        Clear Out
                        </li>
                    </div>
                );
            }
            case false:{
                return (
                    <li id="nav-mobile" 
                    onClick={ props.clicked}>
                        Clear Out
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
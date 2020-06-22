import React, {Component} from 'react';
import { Link }  from 'react-router-dom';


/**
 * 
 * TODO add comments
 *  
 */
class AdminDashboard extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
       
        this.state={
            //adminAccount: this.props.location.state.adminAccount
        
        }

        
    }

    onClick(e){

        alert('call');
       // console.log(' Admin Dashboard ', this.state.adminAccount.accountName);

    }

    render(){
        return(
            <div>
                <div className="row col s12">
                    <div className=" col s6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <span className="card-title">Admin account {/* {this.state.adminAccount.accountName} */}</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                         {/*    <a href={this.onClick}>This is a link</a> */}
                            <Link to="/addaccount">Add New Account</Link>
                            
                            </div>
                        </div>
                    </div>{/* Column 1 */}
                    <div className=" col s6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <span className="card-title">Admin account {/* {this.state.adminAccount.accountName} */}</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                            {/* <a href={this.onClick}>This is a link</a> */}
                            <a  href={this.onClick} onClick={this.onClick}>This is a link</a>
                            
                            </div>
                        </div>
                    </div>{/* Column 1 */}
                </div>{/* Row close */}
            </div>
        )
    }
}

export default AdminDashboard;

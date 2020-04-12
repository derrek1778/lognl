import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {toast,ToastContainer} from 'react-toastify';

//css
import 'react-toastify/dist/ReactToastify.min.css';
import './Landing.css';

class Landing extends Component{

    constructor(props){
        super(props);
        this.onAccountIdChange = this.onAccountIdChange.bind(this);
    }

    state={
        accountId:'',
        isAdmin:false,
    }

    onAccountIdChange(e){
        this.setState({
            accountId: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        
        toast.info('Please wait while we fetch the account', {
            autoclose:8000,
            position:"top-center"
        });
    }

    render(){
        return(
            <div>
                <div class="row cust-card">
                    <div class="card hoverable col s6 offset-m3">
                        <div class="card-content ">
                            
                            <form class="col s12 white-text" onSubmit={this.onSubmit} >
                                <div class="row">
                                    <div class="input-field">
                                    <input id="account-id" type="number"
                                        value={this.state.accountId}
                                        onChange={this.onAccountIdChange}
                                        minLength="5"
                                        maxLength="10"
                                        required="true"
                                        class="validate"
                                        ></input>
                                        <label for="account-id">Enter Account Key</label>
                                    </div>
                                </div>
                                <div class="row">
                                   <div class="input-field col s6">
                                       <button class="btn waves-effect col waves-light"
                                                type="submit"
                                                name="action"
                                                
                                                >
                                        Submit  
                                       </button>

                                   </div>
                                </div>
                            </form>{/* Form close */}
                        </div>
                    </div>
                </div>{/* Div row closed */}
                <ToastContainer/>
            </div>    
        )
    }
}

export default connect(null, actions)(Landing);
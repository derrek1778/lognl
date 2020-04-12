import React, {Component} from 'react';
import {consoleMessage, consoleMessageWithValue} from '../Util/Logger/Logger';

import {connect} from 'react-redux';
import * as actions  from '../../actions';

//css and materialize
import { toast, ToastContainer  } from 'react-toastify';
import './AddAccount.css';
import 'react-toastify/dist/ReactToastify.min.css';


class AddAccount extends Component{

    COMPONENT_NAME = 'AddAccount';

    

    constructor(props){
        super(props);

        this.onAccountNamehange = this.onAccountNamehange.bind(this);
        this.onAccountIdChange = this.onAccountIdChange.bind(this);
        this.onAccountDescChange = this.onAccountDescChange.bind(this);
        this.onAccountKeyChange = this.onAccountKeyChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            accountId: '',
            accountName:'',
            accountDesc: '',
            accountKey: '',
            isActive: false
        }

       


    };

    
    componentDidMount(){
        consoleMessage(this.COMPONENT_NAME,'mounted');

        this.setState({
            accountId: '',
            accountName:'',
            accountDesc: '',
            accountKey: '',
            isActive: false
        });
        
    }
    resetFields(){

        this.setState({
            accountId: '',
            accountName:'',
            accountDesc: '',
            accountKey: '',
            isActive: false
        });
    }
    onAccountIdChange(e){
        
        this.setState({
            accountId:e.target.value
        });
    }

    onAccountDescChange(e){
        this.setState({
            accountDesc:e.target.value
        });
    }

    onAccountNamehange(e){
        this.setState({
            accountName:e.target.value
        });
    }

    onAccountKeyChange(e){
        this.setState({
            accountKey:e.target.value
        });
    }


    

    async onSubmit(e){
        e.preventDefault();
        alert('Called')
        consoleMessage(this.COMPONENT_NAME,'onSubmit');
        const account = {
            accountId: this.state.accountId,
            accountName: this.state.accountName,
            accountDesc: this.state.accountDesc,
            accountKey: this.state.accountKey,
            isActive: true,
            isAdmin: false
        }

        consoleMessageWithValue(this.COMPONENT_NAME, ' Account Value ', account);
        
        const result = await this.props.createNewAccount(account);
        if(result.status = 200){
            console.log('Successfully added value');
        
            toast.success('Account Added Successfully', {position:"top-center"});
        } else{
            consoleMessage(this.COMPONENT_NAME, result.status);

            toast.error('Something went wrong. Try again');
        }

        this.resetFields();

    }

    render(){
        return(
            <div>
                <div className="cust-card">
                    <div className="row">
                    <div class="card hoverable center-align light-yellow col s6 offset-m3">
                        <div class="card-content white-text">
                            <span class="card-title text-black">Add New Account</span>
                            <form class="col s12 white-text" onSubmit={this.onSubmit}>
                                <div class="row"> {/* Account Id Row*/}
                                    <div class="input-field">
                                    <input id="account-id" type="text" 
                                        value={this.state.accountId}
                                        onChange={this.onAccountIdChange}
                                        minLength="5"
                                        maxLength="15"
                                        length="10"
                                        required="true"
                                        class="validate"
                                        data="validate"
                                        >    
                                    </input>

                                    <label for="account-id" >Account Id</label> 
                                    </div>
                                </div> {/* Account Id Row*/}
                                <div class="row"> {/* Account Name Row*/}
                                    <div class="input-field cols6">
                                        <input id="account-name" type="text" 
                                            value={this.state.accountName}
                                            onChange={this.onAccountNamehange}
                                            maxLength="20"
                                            required="true"
                                            class="validate"
                                            data="validate"
                                        ></input>
                                        <label for="account-name">Account Name</label>       
                                        
                                    </div>
                                </div> {/* Account Name Row*/}
                                <div class="row"> {/* Account Description Row*/}
                                    <div class="input-field cols6">
                                        <input id="account-desc" type="text" 
                                            value={this.state.accountDesc}
                                            onChange={this.onAccountDescChange} 
                                            maxLength="20"
                                            required="true"
                                            class="validate"
                                            data="validate"
                                        ></input>
                                        <label for="account-desc">Account Description</label>       
                                        
                                    </div>
                                </div> {/* Account Description Row*/}
                                <div class="row"> {/* Account Key Row*/}
                                    <div class="input-field cols6">
                                        <input id="account-key" type="number" 
                                            value={this.state.accountKey}
                                            onChange={this.onAccountKeyChange}
                                            minLength="5"
                                            maxLength="10"
                                            data-length="10"
                                            required="true"
                                            class="validate"
                                            data="validate"
                                        ></input>
                                        <label for="account-key">Account Key</label>       
                                    </div>
                                </div> {/* Account Key Row*/}
                                
                                <div class="row"> {/* Submit button Row*/}
                                    <div class="input-field col ">
                                    <button class="btn waves-effect col  waves-light" type="submit" name="action"
                                    >Submit
                                    </button>    
                                    </div>
                                </div> {/* Submit button Row*/}
                                
                            </form>
                        </div>{/**Card content closing */}
                    </div>{/**Card Div closing */}
                    </div>
                </div>
                <ToastContainer/>
            </div>    
        )
    }
}

export default connect(null,actions)(AddAccount);
import React, {Component} from 'react';
import {connect,} from 'react-redux';
import {consoleSimpleMessage, consoleMessage, consoleMessageWithValue} from '../Util/Logger/Logger';
import * as actions from '../../actions/accountActions';



//css
import {toast,ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './Landing.css';

class Landing extends Component{

    loadingToastId = null;
    COMPONENT_NAME = 'Landing';
    //checkUserAccount = useDispatch(accountActions.CHECK_USER_ACCOUNT);
    constructor(props){
        super(props);
        this.onAccountIdChange = this.onAccountIdChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    componentDidUpdate(){
        this.setState(null);
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

    /// TOASTS

    loadingToast = () => this.loadingToastId = toast("Fetching... ", {
        autoClose: true,
        type: toast.TYPE.INFO,
        position: "top-center",
        closeButton: true,
        closeOnClick: false,
        className: 'rotateY animated',
        transition: Zoom
    } )

    /// TOASTS -- END

    async onSubmit(e){

        e.preventDefault();
        const actionId = this.state.accountId;

        this.loadingToast();
        consoleSimpleMessage('[Landing.js ] '+ this.props);
        const result = await this.props.checkUserAccount(actionId);
        consoleSimpleMessage('[Landing.js ] '+ this.state.authenticationReducer);
        consoleSimpleMessage('[Landing.js ] account fetch ', result);
        consoleSimpleMessage('[Landing.js ] reducer  ', this.state.authenticationReducer);


        if(result.status === 200){
            consoleSimpleMessage('[Landing.js ] Successfully added value');
            consoleSimpleMessage('[Landing.js ] isAdmin ' + result.data.isAdmin );
            consoleSimpleMessage('[Landing.js ] isActive '+  result.data.isActive);
            toast.update(this.loadingToastId, {
                render: "Redirecting",
                type: toast.TYPE.SUCCESS,
                autoClose:false,
                position: "top-center",
                closeButton: true,
                closeOnClick: false,
                transition: Zoom
            });
            consoleMessageWithValue(this.COMPONENT_NAME, 'Adming account -> ', result.data)
            if(result.data.isAdmin && result.data.isActive){
                console.log('redirecting');
                this.props.history.push({ pathname: '/admindashboard', state:{adminAccount: result.data}});
            }

        } else{
            consoleMessage(this.COMPONENT_NAME, result.body);
           // const resultMessage = result
            toast.update(this.loadingToastId, {
                render: result.data,
                type: toast.TYPE.ERROR,
                autoClose:false,
                position: "top-center",
                closeButton: true,
                closeOnClick: false,
                transition: Zoom
            });
        }


    }
    
   

    render(){
        return(
            <div>
                <div className="cust-card">
                <div className="row">
                    <div className="card hoverable col s6 offset-m3">
                        <div className="card-content ">
                            
                            <form className="col s12 white-text" onSubmit={this.onSubmit} >
                                <div className="row">
                                    <div className="input-field">
                                    <input id="account-id" type="number"
                                        value={this.state.accountId}
                                        onChange={this.onAccountIdChange}
                                        minLength="5"
                                        maxLength="10"
                                        required={true}
                                        className="validate"
                                        ></input>
                                        <label htmlFor="account-id">Enter Account Key</label>
                                    </div>
                                </div>
                                <div className="row">
                                   <div className="input-field col s6">
                                       <button className="btn waves-effect col waves-light"
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
            </div>    
        )
    }
}

export default connect(null, actions)(Landing);
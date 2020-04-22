import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import './App.css';

//import component
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import AddAccount from '../AgentDashboard/ManageAccount/AddAccount';
import AdminDashboard from '../AgentDashboard/AdminDashboard';
//function App() {
class App extends Component{
 
  render(){
    return (
        <div>
          <BrowserRouter>
            <div className="container">
              <Route path="/" component={Header} />
              <Route exact path="/" component={Landing}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/addaccount" component={AddAccount}/>
              <Route exact path="/admindashboard" component={AdminDashboard}/>
              </div>
          </BrowserRouter>
         
        </div>

      );// close return
    }// close render
};// close component

export default connect(null, actions)(App);

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import './App.css';

//import component
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import CreateExercise from '../MERN/CreateExercise';
import EditExercise from '../MERN/EditExercise';
import AddAccount from '../AgentDashboard/AddAccount';
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
              <Route exact path="/create" component={CreateExercise}/>
              <Route exact path="/edit" component={EditExercise}/>
              <Route exact path="/addaccount" component={AddAccount}/>
              </div>
          </BrowserRouter>
         
        </div>

      );// close return
    }// close render
};// close component

export default connect(null, actions)(App);

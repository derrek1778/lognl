import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import './App.css';

//import component
import Header from '../Header/Header';

//function App() {
class App extends Component{
 
  render(){
    return (
        <div className="container">
          <BrowserRouter>
            <div>
              <Route path="/" component={Header} />
              {/*<Route exact path="/" component={Landing}/>
              <Route exact path="/surveys" component={Dashboard}/>
    <Route exact path="/surveys/new" component={SurveyNew }/>*/}
              </div>
          </BrowserRouter>
         
         
         
         
         
         
         <header className="App-header">
            
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>

      );// close return
    }// close render
};// close component

export default App;

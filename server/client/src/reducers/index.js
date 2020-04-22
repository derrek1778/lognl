/**
 * 
 */

 import {combineReducers} from 'redux';
 import authenticationReducer from './authenticationReducer';
 import adminDashboardReducer from './adminDashboardReducer';

 export default combineReducers({
     authenticationReducer: authenticationReducer,
     adminDashboardReducer: adminDashboardReducer
 });
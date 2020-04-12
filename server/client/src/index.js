//import materialized css from node_module
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';



import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';

import App from './components/App/App';
//import * as serviceWorker from './serviceWorker';

import reducers from './reducers';

//create redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
        <Provider
            store={store}>
            <App />
        </Provider>
        , document.querySelector('#root'));


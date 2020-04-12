/**
 * @author vasudev
 */

import axios from 'axios';
import {CHECK_USER_ACCOUNT, CREATE_NEW_ACCOUNT} from './types';
import {defaultLogger, consoleMessage, consoleMessageWithValue} from '../components/Util/Logger/Logger'

var COMPONENT_NAME = 'ACTION_INDEX';

export const checkUserAccount = (params) => async (dispatch)=> {
    defaultLogger('Actions', 'Index', 'Loaded', 'Called');
    const res = await axios.get('/api/check_user_account', params)
                dispatch({type: CHECK_USER_ACCOUNT, payload: res.data});

}

export const createNewAccount = (params) => async (dispatch) => {
    consoleMessage(COMPONENT_NAME, 'Action Index');
    consoleMessageWithValue(COMPONENT_NAME, 'post Data ',params);

    const res = await axios.post('/api/create_new_account',params)
                dispatch({type:CREATE_NEW_ACCOUNT, payload: res.data});
                //.then(res => console.log(res.data));
    consoleMessageWithValue(COMPONENT_NAME, ' Create Account status', res.status);
    consoleMessageWithValue(COMPONENT_NAME, ' Json Success variable ', res.data);
    consoleMessage(COMPONENT_NAME, 'Action posted');
    
    return res;
}
 
import axios from 'axios';
import {accountActions} from './types';
import {defaultLogger, consoleMessage, consoleMessageWithValue} from '../components/Util/Logger/Logger'


export const createNewAccount = (params) => async (dispatch) => {
    consoleMessage(COMPONENT_NAME, 'Action Index');
    consoleMessageWithValue(COMPONENT_NAME, 'post Data ',params);

    const res = await axios.post('/api/create_new_account',params)
                dispatch({type:accountActions.CREATE_NEW_ACCOUNT, payload: res.data});
                //.then(res => console.log(res.data));
    consoleMessageWithValue(COMPONENT_NAME, ' Create Account status', res.status);
    consoleMessageWithValue(COMPONENT_NAME, ' Json Success variable ', res.data);
    consoleMessage(COMPONENT_NAME, 'Action posted');
    
    return res;
}
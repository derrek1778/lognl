
import axios from 'axios';
//import {CHECK_USER_ACCOUNT, CREATE_NEW_ACCOUNT} from './types';
import {accountActions} from './types';
import {defaultLogger, consoleMessage} from '../components/Util/Logger/Logger'

let COMPONENT_NAME = 'ACCOUNTACTION';



export const checkUserAccount = (params) => async (dispatch)=> {
    defaultLogger('Actions', 'Index', 'Loaded', 'Called');
    consoleMessage(COMPONENT_NAME, params);

    const res = await axios.get('/api/check_user_account/', {params: {accountId:params}})
                dispatch({type: accountActions.CHECK_USER_ACCOUNT, payload: res.data, result: res.status, resultText: res.statusText, account: res.data}, );
    return res;

}


export const clearOut = () => (
    {
    type: accountActions.CLEAR_OUT,
    account:{isAdmin:false},
})


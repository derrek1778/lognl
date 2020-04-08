/**
 * @author vasudev
 */

import axios from 'axios';
import {CHECK_USER_ACCOUNT} from './types';
import {defaultLogger} from '../components/Util/Logger/Logger'

export const checkUserAccount = () => async (dispatch)=> {
    defaultLogger('Actions', 'Index', 'Loaded', 'Called');
    const res = await axios.get('/api/check_user_account')
                dispatch({type: CHECK_USER_ACCOUNT, payload: res.data});
}
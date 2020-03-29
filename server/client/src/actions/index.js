/**
 * @author vasudev
 */

import axios from 'axios';
import {CHECK_USER_ACCOUNT} from './types';

const checkUserAccount = () => {
    axios.get('/api/check_user_account');
}
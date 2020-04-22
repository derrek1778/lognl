/**
 * 
 */
import {accountActions} from '../actions/types';

export default function (state=null, action){
    switch(action.type){
        case accountActions.CREATE_NEW_ACCOUNT: 
            return action.payload || false;
        default:
            return state;// action did not change state return default state
    }
}
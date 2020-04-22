/**
 * 
 */
import {accountActions} from '../actions/types';
import {consoleSimpleMessage,} from '../components/Util/Logger/Logger';

let initialState = {account: {isAdmin: false}};

 export default function (state=initialState, action){
     console.log('[AuthReducer.js] isAdmin ', initialState);
     switch(action.type){
         case accountActions.CHECK_USER_ACCOUNT: 
             if(action.payload){
                 const resultPayload = action.payload;
                 //console.log('[Reducers.js ] ', state.indexOf('account')<0);
                //if (state.indexOf('account')<0){
                const test =  {
                    
                        accountValid: resultPayload.isActive,
                        account: action.account,
                        isAdmin: resultPayload.isAdmin,
                        actionResult: (action.status === 200) ? true: false,
                        resultText: action.statusText,
                        
                    
                        
                        };
                        consoleSimpleMessage('[AuthenticationReducer.js ] Action state  ',state);
                        return test;
                //};
             } // if action.payload close
             consoleSimpleMessage('[AuthenticationReducer.js ] Action state  ',state);
             break;

         case accountActions.CLEAR_OUT:
            return initialState;

         default:
             return state;// action did not change state return default state
     }
 }
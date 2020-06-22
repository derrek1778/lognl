/**
 * 
 */
import {accountActions} from '../actions/types';
import {consoleSimpleMessage,} from '../components/Util/Logger/Logger';

let initialState = {account: {isAdmin: false}};

 export default function (state=initialState, action){
     consoleSimpleMessage('[AuthReducer.js] isAdmin ', initialState);
     switch(action.type){
         case accountActions.CHECK_USER_ACCOUNT: 
             if(action.payload){
                const resultPayload = action.payload;
                const resultState =  {
                    
                        accountValid: resultPayload.isActive,
                        account: action.account,
                        isAdmin: resultPayload.isAdmin,
                        actionResult: (action.status === 200) ? true: false,
                        resultText: action.statusText,
                        
                        };
                        consoleSimpleMessage('[AuthenticationReducer.js ] Action state  ',state);
                        return resultState;
                //};
             } // if action.payload close
             consoleSimpleMessage('[AuthenticationReducer.js ] Action state  ',state);
             break;

         case accountActions.CLEAR_OUT:
             console.log('[AuhenticationReducer.js] action clearOut reduced ');
            return initialState;

         default:
             return state;// action did not change state return default state
     }
 }
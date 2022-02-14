import { userConstants } from '../_constants';
const initialstate = {
     sellerloginstate: false
}

export function selleraccession(state =initialstate , action) {
    switch (action.type) {
          case userConstants.SELLERREGISTER_SUCCESS:
               return {
                    ...state,
                    sellerloginstate: true,
               };
          case userConstants.SELLERREGISTER_FAILURE:
               return {
                    ...state,
                    sellerloginstate: false,
               };
          default:
               return state
    }
}
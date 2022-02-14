import { userConstants } from '../_constants';
const initialstate = {
     sellerregisterstate: false,
     sellerregister:""
}

export function sellerregistration(state =initialstate , action) {
    switch (action.type) {
          case userConstants.SELLERREGISTER_SUCCESS:
               return {
                    ...state,
                    sellerregisterstate: true,
                    sellerregister: action.payload
               };
          case userConstants.SELLERREGISTER_FAILURE:
               return {
                ...state,
                sellerregisterstate: false,
                sellerregister: action.payload
               };
          default:
               return state
    }
}
import { combineReducers } from 'redux';
import {sellerregistration} from './sellerregistration.reducer';
import {selleraccession} from './sellerlogin.reducer';

const rootReducer = combineReducers({
    sellerregistration,
    selleraccession

});

export default rootReducer;
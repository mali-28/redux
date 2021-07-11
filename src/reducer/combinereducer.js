import {incCount} from './incReducer';
import {decCount} from './decReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    incNum : incCount,
    decNum : decCount,
});

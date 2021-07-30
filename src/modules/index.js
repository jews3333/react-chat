import { combineReducers } from 'redux';
import sign from './sign';
import room from './room';

const rootReducer = combineReducers({
    sign,
    room
});

export default rootReducer;
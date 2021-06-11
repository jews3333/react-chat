import { SIGN_IN, SIGN_OUT } from './actions';

const initialState = null;

const sign = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN :
            return action.payload;
        case SIGN_OUT : 
            return action.payload;
        default :
            return state;
    }
}

export default sign;
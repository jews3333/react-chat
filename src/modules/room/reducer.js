import { CREATE_ROOM, DELETE_ROOM } from './actions';

const initialState = [];

const room = (state = initialState, action) => {
    switch(action.type){
        case CREATE_ROOM :
            return action.payload;
        case DELETE_ROOM : 
            return action.payload;
        default :
            return state;
    }
}

export default room;
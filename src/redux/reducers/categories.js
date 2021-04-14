import { GET_CATEGORIES } from '../actions/actionTypes';

const initialState = {
    data: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CATEGORIES:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}

export default rootReducer;
import { GET_FEATURED_PLAYLIST } from '../actions/actionTypes';

const initialState = {
    data: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_FEATURED_PLAYLIST:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}

export default rootReducer;
import {CLEAR_DESCRIPTION, DESCRIPTION_CHANGED, SEARCH} from './actionTypes';

const INITIAL_STATE = {description: '', todos: []};

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DESCRIPTION_CHANGED:
            return {...state, description: action.payload};
        case SEARCH:
            return {...state, todos: action.payload};
        case CLEAR_DESCRIPTION:
            return {...state, description: ''};
        default:
            return state;
    }
}

export default reducers;

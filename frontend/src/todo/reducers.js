const INITIAL_STATE = {description: '', todos: []};

export const DESCRIPTION_CHANGE = 'DESCRIPTION_CHANGE';
export const ADD_TODO = 'ADD_TODO';
export const SEARCH_TODO = 'TODO_SEARCH';

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DESCRIPTION_CHANGE:
            return {...state, description: action.payload};
        case SEARCH_TODO:
            return {...state, todos: action.payload.data};
        case ADD_TODO:
            return {...state, description: ''};
        default:
            return state;
    }
}

export default reducers;

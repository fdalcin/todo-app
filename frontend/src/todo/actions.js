import axios from 'axios';

import {ADD_TODO, DESCRIPTION_CHANGE, SEARCH_TODO} from './reducers';

const URL = 'http://localhost:3003/api/todos';

export const onDescriptionChange = (e) => ({
    type: DESCRIPTION_CHANGE,
    payload: e.target.value
});

export const loadTodos = async () => {
    const request = axios.get(`${URL}?sort=-createdAt`);

    return {
        type: SEARCH_TODO,
        payload: await request
    };
}

export const addTodo = (description) => {
    return async dispatch => {
        const response = await axios.post(URL, {description});

        dispatch({type: ADD_TODO, payload: response.data});
        dispatch(loadTodos());
    };
}

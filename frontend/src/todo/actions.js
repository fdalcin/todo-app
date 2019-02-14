import axios from 'axios';

import {CLEAR_DESCRIPTION, DESCRIPTION_CHANGED, SEARCH} from './actionTypes';

const URL = 'http://localhost:3003/api/todos';

export const descriptionChanged = (e) => ({
    type: DESCRIPTION_CHANGED,
    payload: e.target.value
});

export const loadTodos = async (description = '') => {
    return async (dispatch, getState) => {
        const description = getState().todo.description;

        const search = description ? `&description__regex=/${description}/i` : '';

        const response = await axios.get(`${URL}?sort=-createdAt${search}`);

        const data = await response.data;

        dispatch({type: SEARCH, payload: data});
    };
}

export const add = (description) => {
    return async dispatch => {
        await axios.post(URL, {description});

        dispatch(clear());
        dispatch(loadTodos());
    };
}

export const markAsDone = (todo) => {
    return async dispatch => {
        await updateTodoStatus(todo, true);

        dispatch(loadTodos());
    }
}

export const markAsPending = (todo) => {
    return async dispatch => {
        await updateTodoStatus(todo, false);

        dispatch(loadTodos());
    }
}

export const remove = (todo) => {
    return async dispatch => {
        await axios.delete(`${URL}/${todo._id}`);

        dispatch(loadTodos());
    }
}

export const clear = () => {
    return [
        {type: CLEAR_DESCRIPTION},
        loadTodos()
    ]
}

const updateTodoStatus = async (todo, done) => {
    return await axios.put(`${URL}/${todo._id}`, {...todo, done});
}

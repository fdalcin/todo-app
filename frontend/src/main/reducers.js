import {combineReducers} from 'redux';

import TodoReducer from '../todo/reducers';

const reducers = combineReducers({
    todo: TodoReducer
});

export default reducers;

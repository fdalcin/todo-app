import React, {Component, Fragment} from 'react';

import axios from 'axios';

import Header from '../template/header';
import Form from './form';
import List from './list';

import './todo.scss';

const URL = 'http://localhost:3003/api/todos';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {description: '', todos: []};
    }

    async componentDidMount() {
        await this.loadTodos();
    }

    loadTodos = async (description = '') => {
        const search = description ? `&description__regex=/${description}/i` : '';

        const response = await axios.get(`${URL}?sort=-createdAt${search}`);

        this.setState({...this.state, description, todos: response.data});
    }

    onAdd = async () => {
        const {description} = this.state;

        if (!description) return;

        await axios.post(URL, {description});

        await this.loadTodos();
    }

    onSearch = async () => {
        await this.loadTodos(this.state.description);
    }

    onSearchClear = async () => {
        await this.loadTodos();
    }

    onMarkAsDone = async (todo) => {
        await this.updateDoneAttribute(todo, true);
    }

    onMarkAsPending = async (todo) => {
        await this.updateDoneAttribute(todo, false);
    }

    updateDoneAttribute = async (todo, done) => {
        await axios.put(`${URL}/${todo._id}`, {...todo, done});

        await this.loadTodos(this.state.description);
    }

    onRemove = async (todo) => {
        await axios.delete(`${URL}/${todo._id}`);

        await this.loadTodos(this.state.description);
    }

    onInputChange = (e) => {
        this.setState({...this.state, description: e.target.value});
    }

    render() {
        return (
            <Fragment>
                <Header name='Todo' description='cadastro'></Header>

                <Form description={this.state.description}
                      onAdd={this.onAdd}
                      onSearch={this.onSearch}
                      onSearchClear={this.onSearchClear}
                      onInputChange={this.onInputChange}
                />

                <List todos={this.state.todos}
                      onMarkAsDone={this.onMarkAsDone}
                      onMarkAsPending={this.onMarkAsPending}
                      onRemove={this.onRemove}
                />
            </Fragment>
        )
    }
}

export default Todo;

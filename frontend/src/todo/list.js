import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IconButton from '../template/iconButton';

import {loadTodos, markAsDone, markAsPending, remove} from './actions';

class TodoList extends Component {
    componentDidMount() {
        const {loadTodos} = this.props;

        loadTodos();
    }

    renderRows = () => {
        const todos = this.props.todos || [];

        const {markAsDone, markAsPending, remove} = this.props;

        return todos.map((todo) => {
            let todoClass = 'align-middle';

            todoClass += todo.done ? ' text-muted done' : '';

            return (
                <tr key={todo._id} className='todo'>
                    <td className={todoClass}>{todo.description}</td>
                    <td className='text-right actions'>
                        <IconButton color='success'
                                    variant='sm'
                                    icon='check'
                                    onClick={() => markAsDone(todo)}
                                    hidden={todo.done}
                        />
                        <IconButton color='warning'
                                    variant='sm'
                                    icon='undo'
                                    onClick={() => markAsPending(todo)}
                                    hidden={!todo.done}
                        />
                        <IconButton color='danger'
                                    variant='sm'
                                    icon='trash-o'
                                    onClick={() => remove(todo)}
                        />
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Fragment>
                <table className='table table-hover table-striped table-borderless mt-4'>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th className='text-right'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Fragment>
        );
    }
};

const mapStateToProps = (state) => ({todos: state.todo.todos});

const mapDispatchToProps = (dispatch) => bindActionCreators({loadTodos, markAsDone, markAsPending, remove}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import {addTodo, onDescriptionChange, loadTodos} from './actions';

const ENTER = 13;
const DELETE = 46;

class TodoForm extends Component {
    componentDidMount() {
        this.props.loadTodos();
    }

    onKeyUp = (e) => {
        const {addTodo, loadTodos, description} = this.props;

        if (e.keyCode === ENTER) {
            return e.ctrlKey ? loadTodos() : addTodo(description);
        }

        if (e.keyCode === DELETE) {
            return e.ctrlKey ? this.props.onSearchClear() : null;
        }
    }

    render() {
        const {addTodo, loadTodos, description} = this.props;
        const props = this.props;
        return (
            <Fragment>
                <div className='row'>
                    <Grid xs={12} sm={8} md={9}>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Adicione uma tarefa'
                            value={description}
                            onChange={props.onDescriptionChange}
                            onKeyUp={this.onKeyUp}
                        />
                        <small className='form-text text-muted'>
                            Hit <kbd>Enter</kbd> to add /
                            <kbd>Ctrl + Enter</kbd> to search /
                            <kbd>Ctrl + Delete</kbd> to clear the search.
                        </small>
                    </Grid>

                    <Grid xs={12} sm={4} md={3} additionalClasses='text-right'>
                        <IconButton color='primary' variant='sm' icon='plus' onClick={() => addTodo(description)}/>
                        <IconButton color='secondary' variant='sm' icon='search' onClick={() => loadTodos()}/>
                        <IconButton color='light' variant='sm' icon='eraser' onClick={props.onSearchClear}/>
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({description: state.todo.description});

const mapDispatchToProps = (dispatch) => bindActionCreators({addTodo, onDescriptionChange, loadTodos}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

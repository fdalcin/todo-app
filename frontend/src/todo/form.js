import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import {add, clear, descriptionChanged, loadTodos} from './actions';

const ENTER = 13;
const DELETE = 46;

class TodoForm extends Component {
    onKeyUp = (e) => {
        const {add, clear, loadTodos, description} = this.props;

        if (e.keyCode === ENTER) {
            return e.ctrlKey ? loadTodos() : add(description);
        }

        if (e.keyCode === DELETE) {
            return e.ctrlKey ? clear() : null;
        }
    }

    render() {
        const {add, clear, description, descriptionChanged, loadTodos} = this.props;

        return (
            <Fragment>
                <div className='row'>
                    <Grid xs={12} sm={8} md={9}>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Adicione uma tarefa'
                            value={description}
                            onChange={descriptionChanged}
                            onKeyUp={this.onKeyUp}
                        />
                        <small className='form-text text-muted'>
                            Hit <kbd>Enter</kbd> to add / <kbd>Ctrl + Enter</kbd> to search / <kbd>Ctrl + Delete</kbd> to clear the search.
                        </small>
                    </Grid>

                    <Grid xs={12} sm={4} md={3} additionalClasses='text-right'>
                        <IconButton color='primary' variant='sm' icon='plus' onClick={() => add(description)}/>
                        <IconButton color='secondary' variant='sm' icon='search' onClick={loadTodos}/>
                        <IconButton color='light' variant='sm' icon='eraser' onClick={clear}/>
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({description: state.todo.description});

const mapDispatchToProps = (dispatch) => bindActionCreators({add, clear, descriptionChanged, loadTodos}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

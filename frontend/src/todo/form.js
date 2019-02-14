import React, {Fragment} from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

const ENTER = 13;
const DELETE = 46;

export default props => {

    const onKeyUp = (e) => {
        if (e.keyCode === ENTER) {
            return e.ctrlKey ? props.onSearch() : props.onAdd();
        }

        if (e.keyCode === DELETE) {
            return e.ctrlKey ? props.onSearchClear() : null;
        }
    }

    return (
        <Fragment>
            <div className='row'>
                <Grid xs={12} sm={8} md={9}>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        value={props.description}
                        onChange={props.onInputChange}
                        onKeyUp={onKeyUp}
                    />
                    <small className="form-text text-muted">
                        Hit <kbd>Enter</kbd> to add / <kbd>Ctrl + Enter</kbd> to search / <kbd>Ctrl + Delete</kbd> to clear the search.
                    </small>
                </Grid>

                <Grid xs={12} sm={4} md={3} additionalClasses='text-right'>
                    <IconButton color='primary' variant='sm' icon='plus' onClick={props.onAdd}/>
                    <IconButton color='secondary' variant='sm' icon='search' onClick={props.onSearch}/>
                    <IconButton color='light' variant='sm' icon='eraser' onClick={props.onSearchClear}/>
                </Grid>
            </div>
        </Fragment>
    );
}

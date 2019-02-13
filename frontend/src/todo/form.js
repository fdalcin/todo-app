import React, {Fragment} from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
    <Fragment>
        <div className='row'>
            <Grid xs={12} sm={9} md={10}>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.onInputChange}
                />
            </Grid>

            <Grid>
                <IconButton class='secondary' icon='plus' onClick={props.onAddClick}/>
            </Grid>
        </div>
    </Fragment>
);

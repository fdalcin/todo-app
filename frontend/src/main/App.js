import React, {Fragment} from 'react';

import './App.scss';

import Menu from '../template/menu';
import Routes from './routes';

export default props => (
    <Fragment>
        <Menu/>

        <div className='container'>
            <Routes/>
        </div>
    </Fragment>
);

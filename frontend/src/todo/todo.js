import React, {Fragment} from 'react';

import Header from '../template/header';
import Form from './form';
import List from './list';

import './todo.scss';

export default props => (
    <Fragment>
        <Header name='Todo' description='cadastro'></Header>
        <Form/>
        <List/>
    </Fragment>
);

import React, {Component, Fragment} from 'react';

import Header from '../template/header';
import Form from './form';
import List from './list';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            todos: []
        };
    }

    onAddClick = () => {
        console.log(this.state.description);
    }

    onInputChange = (e) => {
        this.setState({...this.state, description: e.target.value});
    }

    render() {
        return (
            <Fragment>
                <Header name='Todo' description='cadastro'></Header>

                <Form description={this.state.description}
                      onAddClick={this.onAddClick}
                      onInputChange={this.onInputChange}
                />

                <List/>
            </Fragment>
        )
    }
}

export default Todo;

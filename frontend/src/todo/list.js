import React, {Fragment} from 'react';

import IconButton from '../template/iconButton';

export default props => {

    const rows = () => {
        const todos = props.todos || [];

        const {onMarkAsDone, onMarkAsPending, onRemove} = props;

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
                                    onClick={() => onMarkAsDone(todo)}
                                    hidden={todo.done}
                        />
                        <IconButton color='warning'
                                    variant='sm'
                                    icon='undo'
                                    onClick={() => onMarkAsPending(todo)}
                                    hidden={!todo.done}
                        />
                        <IconButton color='danger'
                                    variant='sm'
                                    icon='trash-o'
                                    onClick={() => onRemove(todo)}
                        />
                    </td>
                </tr>
            );
        });
    }

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
                    {rows()}
                </tbody>
            </table>
        </Fragment>
    );
};

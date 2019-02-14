import React from 'react';

export default props => (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container'>
            <a className='navbar-brand' href='#/todos'>
                <i className='fa fa-calendar-check-o mr-2'></i> Todo App
            </a>

            <div className='collapse navbar-collapse' id='nav'>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <a className='nav-link' href='#/todos'>Tarefas</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#/about'>About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

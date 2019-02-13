import React from 'react';

export default props => {
    if (props.hidden) return null;

    return (
        <button className={'btn btn-' + props.class} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    );
}

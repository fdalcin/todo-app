import React from 'react';

export default props => {
    if (props.hidden) return null;

    let classes = [];

    const {color, variant} = props;

    classes.push(color || 'primary');
    classes.push(variant || 'md');

    const className = classes.reduce((previousValue, c) => previousValue += ' btn-' + c, 'btn mr-2');

    return (
        <button className={className} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    );
}

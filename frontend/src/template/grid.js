import React, {Component} from 'react';

class Grid extends Component {
    toBootstrapClasses() {
        let classes = [];

        if (this.props.xs) classes.push(`col-xs-${this.props.xs}`);
        if (this.props.sm) classes.push(`col-sm-${this.props.sm}`);
        if (this.props.md) classes.push(`col-md-${this.props.md}`);
        if (this.props.lg) classes.push(`col-lg-${this.props.lg}`);

        return classes.join(' ');
    }

    render() {
        const classes = this.toBootstrapClasses();

        return (
            <div className={`my-1 ${classes} ${this.props.additionalClasses}`}>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;

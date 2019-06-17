import React from 'react';
import PropTypes from 'prop-types';
import classes from './Todo.module.css';

const Todo = ({ onClick, completed, text }) => {
    let classNames = [classes.card];

    if(completed) {
        classNames.push(classes.complete);
    }

    return (<li
            onClick={onClick}
            className={classNames.join(' ')}
        >
            {text}
        </li>
    );
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;

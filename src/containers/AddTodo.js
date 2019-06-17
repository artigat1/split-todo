import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import classes from './AddTodo.module.css';

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className={classes.container}>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                <input ref={node => input = node} placeholder="type reminder..." />
                <button type="submit" className={classes.button}>
                    Add Todo
                </button>
            </form>
        </div>
    )
};

export default connect()(AddTodo);

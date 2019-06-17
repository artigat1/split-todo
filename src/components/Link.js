import React from 'react';
import PropTypes from 'prop-types';
import classes from './Link.module.css';

const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        className={classes.button}
    >
        {children}
    </button>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;

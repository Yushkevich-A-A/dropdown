import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const { onSwitch } = props;

    return (
        <button className='btn' onClick={onSwitch}>
            Account Setting
            <span className='material-icons'>public</span>
        </button>
    )
}

Button.propTypes = {
    onSwitch: PropTypes.func.isRequired,
};

export default Button;


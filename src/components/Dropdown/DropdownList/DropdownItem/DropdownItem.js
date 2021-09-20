import React from 'react';
import PropTypes from 'prop-types';

function DropdownItem(props) {
    const { item, selected, onSelect} = props;
    return (
        <li className={item === selected ? 'active' : null} onClick={onSelect}>
            <a href="#/">{item}</a>
        </li>
    )
}

DropdownItem.propTypes = {
    item: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default DropdownItem;


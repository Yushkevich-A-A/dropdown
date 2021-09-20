import React, { useState } from 'react';
import Button from './Button/Button';
import DropdownList from './DropdownList/DropdownList';

function Dropdown() {

    const list = [
        'Profile Information',
        'Change Password', 
        'Become PRO', 
        'Help', 
        'Log Out'
    ];

    let [ status, setStatus ] = useState(null);

    const onSwitch = () => {
        setStatus(item => (item === 'open') ? null : 'open');
    }

    return (
        <div className={`dropdown-wrapper ${status}`}>
            <Button onSwitch={onSwitch}/>
            <DropdownList list={list}/>
        </div>
    )
}

export default Dropdown;



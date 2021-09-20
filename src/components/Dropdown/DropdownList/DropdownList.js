import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import DropdownItem from './DropdownItem/DropdownItem';

function DropdownList(props) {
    const { list } = props;

    let [ selected, setSelected ] = useState(list[0]);

    const onSelect = (event) => {
        setSelected(event.currentTarget.innerText)
    }

    return (
        <ul className='dropdown'>;
            {
                list.map( item => <DropdownItem 
                    key={v4()} 
                    item={item} 
                    selected={selected} 
                    onSelect={onSelect}/>)
            }
        </ul>
    )
}

DropdownList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default DropdownList;


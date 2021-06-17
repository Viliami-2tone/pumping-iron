import React from 'react';
const SortControl = ({ options }) => {
    return (<div>
        {options.map(option => <button>{option}</button>)}
    </div>);
}

export default SortControl;
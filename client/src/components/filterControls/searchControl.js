import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchControl = ({ handleSearch }) => {
    const style = {
        display: 'flex'
    }
    const [searchTerm, setSearchTerm] = useState('')
    return (<div style={style}>
        <input type='search' placeholder={'search'} value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }}></input>
        <button onClick={() => { handleSearch(searchTerm) }}><FontAwesomeIcon icon={faSearch} size='5x' /></button>

    </div>);
}

export default SearchControl;
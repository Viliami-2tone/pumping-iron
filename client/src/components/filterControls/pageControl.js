import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
const PageControl = ({ onPrev, onNext, currentPage = null, totalPages = null }) => {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer'
    }
    return (<div style={style}>
        <div><FontAwesomeIcon onClick={onPrev} icon={faHandPointLeft} size="5x" /></div>
        {currentPage > 0 && <div>Page {currentPage} of {totalPages}</div>}
        <div> <FontAwesomeIcon onClick={onNext} icon={faHandPointRight} size="5x" /></div>
    </div>);
}

export default PageControl;


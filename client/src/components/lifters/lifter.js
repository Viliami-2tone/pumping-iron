import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';


const Lifter = ({ firstName, lastName , proMember, workouts}) => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 1px',
        padding: '20px'
    }

    const styleGold = {
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 1px',
        padding: '20px',
        backgroundColor: 'gold'
    }


    if(!workouts){

        workouts = 0;

    }


    if(proMember === true){
        return(<div style={styleGold}>
            <div>{`${firstName} ${lastName}`} <FontAwesomeIcon icon={faMedal} /> </div>
            <div>Total Workouts : {workouts}</div>
        </div>)
    }
    
    return (<div style={style}>
        <div>{`${firstName} ${lastName}`}</div>
        <div>Total Workouts : {workouts}</div>
    </div>);
}

export default Lifter;
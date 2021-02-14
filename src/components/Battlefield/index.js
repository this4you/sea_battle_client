import React from 'react';
import Cell from "../Cell";
import './Battlefield.scss';

const Battlefield = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            items.push(<Cell key={j + " " + i} x={j} y={i}/>)
        }
    }

    return (
        <div>
            <div className='battlefield'>
                {items}
            </div>
        </div>
    )
};
export default Battlefield;

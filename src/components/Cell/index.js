import React from 'react';
import './Cell.scss';

const Cell = ({y, x}) => {
    const onMouseOverHandler = (e) => {
        if (e.type === 'mouseover') {
            e.target.style.background = 'pink'
        }
        if (e.type === 'mouseout') {
            e.target.style.background = ''
        }
    }

    return (
        <div className='cell' onMouseOver={onMouseOverHandler} onMouseOut={onMouseOverHandler}>

        </div>
    );
};

export default Cell;

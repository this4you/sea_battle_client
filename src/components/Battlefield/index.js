import React, { useState } from 'react';
import './Battlefield.scss';
import Cell from "../Cell";

const Battlefield = ({ cells, onMouseOverHandler, onCellClick, onContextMenu}) => {
    return (
        <div className='battlefield' onMouseOut={onMouseOverHandler} onMouseOver={onMouseOverHandler}
            onContextMenu={onContextMenu} onClick={onCellClick}>
            {cells && cells.map(cell => <Cell key={cell._id} x={cell.x} y={cell.y} isShip={cell.isShip} isSelected={cell.isSelected} />)}
        </div>
    )
};
export default Battlefield;

import React from 'react';
import './Battlefield.scss';
import Cell from "../Cell";

const Battlefield = ({cells, onMouseOverHandler, onCellClick, onContextMenu, size = 640}) => {
    const cellSize = Math.round((size - (size / 100 * 6.25)) / 10);
    console.log(cellSize);
    return (
        <div className='battlefield' onMouseOut={onMouseOverHandler} onMouseOver={onMouseOverHandler}
             onContextMenu={onContextMenu} onClick={onCellClick}>
            {cells && cells.map(cell => <Cell key={cell._id}
                                              x={cell.x}
                                              y={cell.y}
                                              isShip={cell.isShip}
                                              isSelected={cell.isSelected}
                                              isAroundZone={cell.isAroundZone}
                                              size={cellSize}
            />)}
        </div>
    )
};
export default Battlefield;

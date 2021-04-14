import React from 'react';
import './Battlefield.scss';
import Cell from "../Cell";

const Battlefield = ({cells, onMouseOverHandler, onCellClick, onContextMenu, size = 640}) => {
    const cellSize = Math.round((size - (size / 100 * 6.25)) / 10);
    return (
        <div className='battlefield-wrap' onMouseOut={onMouseOverHandler} onMouseOver={onMouseOverHandler}
             onContextMenu={onContextMenu} onClick={onCellClick} style={{maxWidth: size, minWidth: size}}>
            <div className='battlefield'>
                {cells && cells.map(cell => <Cell key={cell._id}
                                                  x={cell.x}
                                                  y={cell.y}
                                                  isShip={cell.isShip}
                                                  shipId={cell.shipId}
                                                  isSelected={cell.isSelected}
                                                  isAroundZone={cell.isAroundZone}
                                                  size={cellSize}
                                                  isKilled={cell.isKilled}
                                                  isWounded={cell.isWounded}
                                                  isShootSelected={cell.isShootSelected}
                                                  isMissed={cell.isMissed}
                    />
                )}
            </div>
        </div>
    )
};
export default Battlefield;

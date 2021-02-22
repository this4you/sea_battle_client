import React, { useState } from 'react';
import './Battlefield.scss';
import Cell from "../Cell";

const Battlefield = ({ items }) => {
    const shipSize = 4;
    const [cells, setSells] = useState(items);
    const [isRow, setIsRow] = useState(false);
    const getShip = (x, y) => {
        let ship = [];
        for (let i = 0; i < shipSize; i++) {
            let cell = cells.filter((item) => {
                if (isRow) {
                    return item.y === +y && item.x === +x + i;
                } else {
                    return item.y === +y + i && item.x === +x;
                }
            });
            if (cell.length) {
                ship.push(cell[0]);
            }
        }
        return ship;
    }
    const onContextMenu = (e) => {
        e.preventDefault();
        if (e.target.classList.contains("cell")) {
            let x = e.target.dataset.x;
            let y = e.target.dataset.y;
            showShip(x, y, false);
            setIsRow(!isRow);
        }
    }
    const showShip = (x, y, show) => {
        let ship = getShip(x, y);
        let newCells = [...cells];

        if (ship.length === shipSize) {
            ship.forEach((item) => {
                newCells[newCells.indexOf(item)].isShip = show;
            });
        }
        setSells(newCells);
    }
    const onMouseOverHandler = (e) => {
        if (e.target.classList.contains("cell")) {
            let x = e.target.dataset.x;
            let y = e.target.dataset.y;
            if (e.type === 'mouseover') {
                showShip(x, y, true);
            }

            if (e.type === 'mouseout') {
                showShip(x, y, false);
            }
        }
    }

    return (
        <div className='battlefield' onMouseOut={onMouseOverHandler} onMouseOver={onMouseOverHandler}
            onContextMenu={onContextMenu}>
            {cells && cells.map(cell => <Cell key={cell._id} x={cell.x} y={cell.y} isShip={cell.isShip} />)}
        </div>
    )
};
export default Battlefield;

import React, { useState } from 'react';
import Battlefield from "../Battlefield";

const ConfigBattlefield = ({ items, currentShipSize }) => {
    const [cells, setSells] = useState(items);
    const [isRow, setIsRow] = useState(false);
    const getShip = (x, y) => {
        let ship = [];
        for (let i = 0; i < currentShipSize; i++) {
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

        if (ship.length === currentShipSize) {
            ship.forEach((item) => {
                newCells[newCells.indexOf(item)].isSelected = show;
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

    const onCellClick = (e) => {
        if (e.target.classList.contains("cell")) {
            let x = e.target.dataset.x;
            let y = e.target.dataset.y;
            let ship = getShip(x, y);
            let newCells = [...cells];

            if (ship.length === currentShipSize) {
                ship.forEach((item) => {
                    newCells[newCells.indexOf(item)].isShip = true;
                });
            }
            setSells(newCells);
        }
    }

    return (
        <Battlefield cells={cells} onCellClick={onCellClick} onMouseOverHandler={onMouseOverHandler} onContextMenu={onContextMenu}/>
    )
};
export default ConfigBattlefield;

import React, { useState, useEffect } from 'react';
import Battlefield from "../Battlefield";
import {v4 as uuidv4 } from 'uuid';

const ConfigBattlefield = ({ items, currentShipSize, addShip, canAddShip }) => {
    const [cells, setSells] = useState('');
    const [isRow, setIsRow] = useState(false);
    useEffect(() => {
        setSells(items);
    }, [items]);
    const getShip = (x, y) => {
        let ship = [];
        for (let i = 0; i < currentShipSize; i++) {
            let cell = cells.filter((item) => {
                if (isRow) {
                    return item.y === +y && item.x === +x + i && !item.isShip && !item.isAroundZone;
                } else {
                    return item.y === +y + i && item.x === +x && !item.isShip && !item.isAroundZone;
                }
            });
            if (cell.length) {
                ship.push(cell[0]);
            }
        }
        return ship;
    }

    const getShipAround = (ship) => {
        const shipAroundZone = [];
        function setAround(cell) {
            if (cell.length) {
                shipAroundZone.push(cell[0]);
            }
        }
        ship.forEach(shipCell => {
            setAround(cells.filter((item) => {
                return item.x === shipCell.x - 1 && item.y === shipCell.y && !item.isAroundZone && !item.isSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x + 1 && item.y === shipCell.y && !item.isAroundZone && !item.isSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x && item.y === shipCell.y - 1 && !item.isAroundZone && !item.isSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x && item.y === shipCell.y + 1 && !item.isAroundZone && !item.isSelected;
            }));

            setAround(cells.filter((item) => {
                return item.x === shipCell.x - 1 && item.y === shipCell.y - 1 && !item.isAroundZone && !item.isSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x + 1 && item.y === shipCell.y + 1 && !item.isAroundZone && !item.isSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x + 1 && item.y === shipCell.y - 1 && !item.isAroundZone && !item.isSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x - 1 && item.y === shipCell.y + 1 && !item.isAroundZone && !item.isSelected;
            }));

        });
        return shipAroundZone;
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
        if (e.target.classList.contains("cell") && canAddShip) {
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
        if (e.target.classList.contains("cell") && canAddShip) {
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            const ship = getShip(x, y);
            const newCells = [...cells];
            if (ship.length === currentShipSize) {
                const aroundZode = getShipAround(ship);
                aroundZode.forEach(item => {
                    newCells[newCells.indexOf(item)].isAroundZone = true;
                });
                const shipId = uuidv4();
                ship.forEach((item) => {
                    newCells[newCells.indexOf(item)].isShip = true;
                    newCells[newCells.indexOf(item)].shipId = shipId;
                });
                addShip();
            }
            setSells(newCells);
        }
    }

    return (
        <Battlefield cells={cells} onCellClick={onCellClick} onMouseOverHandler={onMouseOverHandler} onContextMenu={onContextMenu} size={640} />
    )
};
export default ConfigBattlefield;

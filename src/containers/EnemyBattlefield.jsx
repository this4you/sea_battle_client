import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Battlefield} from '../components';
import {gameConfigActions} from '../redux/actions';
import {v4 as uuidv4} from "uuid";

const EnemyBattlefield = ({enemyCells, fetchGetEnemyCells, fetchShoot}) => {
    const [cells, setSells] = useState('');
    useEffect(() => {
        if (enemyCells.length === 0) {
            fetchGetEnemyCells();
        } else {
            setSells(enemyCells);
        }
    }, [enemyCells]);

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

    const showShip = (x, y, show) => {
        let ship = getShip(x, y);
        let newCells = [...enemyCells];

        if (ship.length === 1) {
            ship.forEach((item) => {
                newCells[newCells.indexOf(item)].isShootSelected = show;
            });
        }
        setSells(newCells);
    }

    const getShip = (x, y) => {
        let ship = [];
        let cell = cells.filter((item) => {
            return item.y === +y && item.x === +x && !item.isKilled && !item.isWounded && !item.isAroundZone;
        });
        if (cell.length) {
            ship.push(cell[0]);
        }
        return ship;
    }

    const onCellClick = (e) => {
        if (e.target.classList.contains("cell")) {
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            const ship = getShip(x, y);
            //const newCells = [...cells];
            if (ship.length === 1) {
                fetchShoot({cellId: ship[0]._id});
            }
            //setSells(newCells);
        }
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
                return item.x === shipCell.x - 1 && item.y === shipCell.y && !item.isAroundZone && !item.isShootSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x + 1 && item.y === shipCell.y && !item.isAroundZone && !item.isShootSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x && item.y === shipCell.y - 1 && !item.isAroundZone && !item.isShootSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x && item.y === shipCell.y + 1 && !item.isAroundZone && !item.isShootSelected;
            }));

            setAround(cells.filter((item) => {
                return item.x === shipCell.x - 1 && item.y === shipCell.y - 1 && !item.isAroundZone && !item.isShootSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x + 1 && item.y === shipCell.y + 1 && !item.isAroundZone && !item.isShootSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x + 1 && item.y === shipCell.y - 1 && !item.isAroundZone && !item.isShootSelected;
            }));
            setAround(cells.filter((item) => {
                return item.x === shipCell.x - 1 && item.y === shipCell.y + 1 && !item.isAroundZone && !item.isShootSelected;
            }));

        });
        return shipAroundZone;
    }

    return (
        <Battlefield size={520} cells={cells}
                     onMouseOverHandler={onMouseOverHandler}
                     onCellClick={onCellClick}
        />
    )
};
export default connect(({gameConfigs}) => (
    {
        ...gameConfigs
    }
), gameConfigActions)(EnemyBattlefield);

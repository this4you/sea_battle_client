import React, {useEffect} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {gameConfigActions} from '../redux/actions';
import socket from "../socket";

const BattlefieldMiddleZone = ({canShoot, userId, setMyKilledCells, setMyWoundedCell, setMyMissedCell, setCanShoot}) => {

    useEffect(() => {
        socket.on('SERVER:KILLED', (data) => {
            if (data) {
                const shootData = JSON.parse(data);
                if (shootData.shootUser !== userId) {
                    setMyKilledCells(shootData.cells);
                }
            }
        });
        socket.on('SERVER:WOUNDED', (data) => {
            if (data) {
                const shootData = JSON.parse(data);
                if (shootData.shootUser !== userId) {
                    setMyWoundedCell(shootData.cell);
                }
            }
        });
        socket.on('SERVER:MISSED', (data) => {
            if (data) {
                const shootData = JSON.parse(data);
                if (shootData.shootUser !== userId) {
                    setMyMissedCell(shootData.cell);
                    setCanShoot(true);
                }
            }
        });

    }, []);

    return (
        <div className={classNames('middle-zone',
            {'middle-zone__can_shoot': canShoot})}>{canShoot ? "Let's shoot!" : "Wait..."}</div>
    )
};
export default connect(({gameConfigs}) => (
    {
        ...gameConfigs
    }
), gameConfigActions)(BattlefieldMiddleZone);

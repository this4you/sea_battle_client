import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ConfigBattlefield as ConfigBattlefieldBase} from '../components';
import {gameConfigActions} from '../redux/actions';
import socket from "../socket";

const ConfigBattlefield = ({cells, currentShipSize, setShip, canAddShip, fetchGetCells, fetchGameInfo, userReady, userId}) => {
    useEffect(() => {
        if (cells.length === 0) {
            fetchGetCells();
        }
        socket.on('SERVER:SET_CONFIG', () => {
            fetchGameInfo();
        });
    }, []);
    return (
        <ConfigBattlefieldBase items={cells} currentShipSize={currentShipSize} addShip={setShip}
                               canAddShip={canAddShip && !userReady}/>
    )
};
export default connect(({gameConfigs}) => (
    {
        ...gameConfigs
    }
), gameConfigActions)(ConfigBattlefield);

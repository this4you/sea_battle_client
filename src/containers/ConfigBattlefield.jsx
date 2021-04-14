import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ConfigBattlefield as ConfigBattlefieldBase} from '../components';
import {gameConfigActions} from '../redux/actions';

const ConfigBattlefield = ({cells, currentShipSize, setShip, canAddShip, fetchGetCells, userReady}) => {
    useEffect(() => {
        if (cells.length === 0) {
            fetchGetCells();
        }
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

import React from 'react';
import { connect } from 'react-redux';
import { ConfigBattlefield as ConfigBattlefieldBase } from '../components';
import { gameConfigActions } from '../redux/actions';

const ConfigBattlefield = ({ cells, currentShipSize, setShip, canAddShip }) => {
    return (
        <ConfigBattlefieldBase items={cells} currentShipSize={currentShipSize} addShip={setShip} canAddShip={canAddShip}/>
    )
};
export default connect(({ battlefield, gameConfigs }) => (
    {
        cells: battlefield.cells,
        currentShipSize: gameConfigs.currentShipSize,
        canAddShip: gameConfigs.canAddShip
    }
), gameConfigActions)(ConfigBattlefield);

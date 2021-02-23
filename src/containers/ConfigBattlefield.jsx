import React from 'react';
import { connect } from 'react-redux';
import { ConfigBattlefield as BattlefieldBase } from '../components';
import { gameConfigActions } from '../redux/actions';

const ConfigBattlefield = ({ cells, currentShipSize }) => {
    return (
        <BattlefieldBase items={cells} currentShipSize={currentShipSize} />
    )
};
export default connect(({ battlefield, gameConfigs }) => (
    {
        cells: battlefield.cells,
        currentShipSize: gameConfigs.currentShipSize
    }
), gameConfigActions)(ConfigBattlefield);

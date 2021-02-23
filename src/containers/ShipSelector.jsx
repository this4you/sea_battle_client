import React from 'react';
import { connect } from 'react-redux';
import { ShipSelector as ShipSelectorBase } from '../components';
import { gameConfigActions } from '../redux/actions';
const ShipSelector = ({ selectors, currentSelector, setСurrentSize }) => {
    return (
        <ShipSelectorBase currentSelector={currentSelector} selectrors={selectors} onSelectSelected = {setСurrentSize} />
    )
};
export default connect(({ gameConfigs }) =>
({
    selectors: gameConfigs.selectrors,
    currentSelector: gameConfigs.currentShipSize
}), gameConfigActions)(ShipSelector);

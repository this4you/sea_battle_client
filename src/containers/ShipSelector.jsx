import React from 'react';
import {connect} from 'react-redux';
import {ShipSelector as ShipSelectorBase} from '../components';
import {gameConfigActions} from '../redux/actions';

const ShipSelector = ({selectrors, currentShipSize, setСurrentSize, userReady}) => {
    return (
        <ShipSelectorBase currentSelector={currentShipSize}
                          selectrors={selectrors}
                          onSelectSelected={setСurrentSize}
                          visible={!userReady}/>
    )
};
export default connect(({gameConfigs}) =>
    ({
        ...gameConfigs
    }), gameConfigActions)(ShipSelector);

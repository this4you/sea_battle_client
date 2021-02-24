import React from 'react';
import { connect } from 'react-redux';
import { gameConfigActions } from '../redux/actions';
const ReadyButton = ({ readyToBattle, cells }) => {
    const onReady = () => {
        console.log(cells);
    }

    if (readyToBattle) {
        return (
            <div className="ready-button" onClick={onReady}>
                <h1>READY</h1>
            </div>
        )
    } else {
        return (
            <div />
        )
    }
};
export default connect(({ gameConfigs, battlefield }) =>
({
    readyToBattle: gameConfigs.readyToBattle,
    cells: battlefield.cells
}), gameConfigActions)(ReadyButton);

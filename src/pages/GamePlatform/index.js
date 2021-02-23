import React from 'react';
import './GamePlatform.scss';
import { ConfigBattlefield, ShipSelector } from '../../containers';

const GamePlatform = () => {

    return (
        <div className="platform">
            <div className="platform-header">
                <h1>Sea Battle</h1>
            </div>
            <div className="platform-middle">
                <ShipSelector />
                <ConfigBattlefield />
                <div className="platform-middle-right" />
            </div>

        </div>
    );
};
export default GamePlatform;
import React from 'react';
import './GamePlatform.scss';
import { ConfigBattlefield, ShipSelector, ReadyButton } from '../../containers';

const GamePlatform = () => {

    return (
        <div className="platform">
            <div className="platform-header">
                <h1>SEA Battle</h1>
            </div>
            <div className="platform-middle">
                <ShipSelector />
                <ConfigBattlefield />
                <div className="platform-middle-right">
                    <ReadyButton />
                </div>
            </div>

        </div>
    );
};
export default GamePlatform;
import React from 'react';
import './GamePlatform.scss';
import { Battlefield, ShipSelector } from '../../components/';


const GamePlatform = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            items.push({
                _id: j + " " + i,
                x: j,
                y: i
            });
        }
    }
    return (
        <div className="platform">
            <div className="platform-header">
                <h1>Sea Battle</h1>
            </div>
            <div className="platform-middle">
                <ShipSelector />
                <Battlefield items={items} />
                <div className="platform-middle-right" />
            </div>

        </div>
    );
};

export default GamePlatform;

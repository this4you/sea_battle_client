import React from 'react';
import './GamePlatform.scss';
import {Battlefield} from '../../components/';
import Cell from "../../components/Cell";

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
        <div>
            <h1>GamePlatform</h1>
            <Battlefield items={items}/>
        </div>
    );
};

export default GamePlatform;

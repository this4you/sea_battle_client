import React from 'react';
import {Battlefield} from '../../components';
import {UserBattlefield, EnemyBattlefield} from '../../containers';
import './BattleFieldPlatform.scss';

const BattleFieldPlatform = () => {
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
        <div className="b-platform">
            <div className="b-platform__battlefield">
                <UserBattlefield/>
            </div>
            <div className="b-platform__middle-zone">
                middle
            </div>
            <div className="b-platform__battlefield">
                <EnemyBattlefield/>
            </div>
        </div>
    );
};
export default BattleFieldPlatform;
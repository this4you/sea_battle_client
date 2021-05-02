import React from 'react';
import './GamePlatform.scss';
import { Steps } from 'antd';
import { ConfigBattlefield, ShipSelector, ReadyButton } from '../../containers';

const { Step } = Steps;
const GamePlatform = () => {
    return (
        <div className="platform">
            <div className="platform-middle">
                <ShipSelector />
                <ConfigBattlefield />
                <div className="platform-middle-right">
                    <Steps direction="vertical" current={1}>
                        <Step title="Friend join" description="Friend join to the game." />
                        <Step title="Fill battlefield" description="Need set all ships and start the game." />
                    </Steps>
                    <ReadyButton />
                </div>
            </div>

        </div>
    );
};
export default GamePlatform;
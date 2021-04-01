import React, {useState} from 'react';
import {connect} from 'react-redux';
import {gameConfigActions} from '../redux/actions';
import {SmileTwoTone} from "@ant-design/icons";
import {Spin} from "antd";

const antIcon = <SmileTwoTone style={{fontSize: 200}} spin/>;

const ReadyButton = ({readyToBattle, cells}) => {
    const onReady = () => {
        setIsReady(true);
    }
    const [isReady, setIsReady] = useState(false);
    if (readyToBattle && !isReady) {
        return (
            <div className="ready-button" onClick={onReady}>
                <h1>READY</h1>
            </div>
        )
    } else if (isReady) {
        return (
            <Spin indicator={antIcon}/>
        )
    } else {
        return (
            <div/>
        )
    }
};
export default connect(({gameConfigs, battlefield}) =>
    ({
        readyToBattle: gameConfigs.readyToBattle,
        cells: battlefield.cells
    }), gameConfigActions)(ReadyButton);

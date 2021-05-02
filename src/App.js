import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import {GamePlatform, HomePage, JoinPage, BattleFieldPlatform} from './pages'
import {connect} from "react-redux";
import {gameConfigActions} from "./redux/actions";
import socket from "./socket";
import {
    Switch,
    Route,
} from "react-router-dom";

const statusSwitch = (props) => {
    switch (props.gameStatus) {
        case 'home':
            return <HomePage {...props}/>;
        case 'config':
            return <GamePlatform {...props}/>;
        case 'game':
            return  <BattleFieldPlatform {...props}/>
        default:
            return <div/>;
    }
}

const MainRouteComponent = (props) => {
    return (
        <>
            {statusSwitch(props)}
        </>
    )
}

function App({status, _id, fetchGameInfo, setGameStatus}) {

    useEffect(() => {
        if (_id) {
            fetchGameInfo();
        } else if (status !== "home") {
            setGameStatus("home");
        }
    }, []);

    return (
        <div className="app">
            <div className="header-logo">
                SEA battle
            </div>
            <Switch>
                <Route
                    path={["/join"]}
                    component={JoinPage}
                />
                <Route
                    path="/"
                    render={(props) => (<MainRouteComponent gameStatus={status} {...props}/>)}
                />
            </Switch>
        </div>
    );
}

export default connect(({gameConfigs}) =>
    ({
        ...gameConfigs
    }), gameConfigActions)(App);
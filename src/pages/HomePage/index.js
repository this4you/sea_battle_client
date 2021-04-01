import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NameField} from "../../components";
import {LinkOutlined, SmileOutlined} from '@ant-design/icons';
import {gameConfigActions} from '../../redux/actions';
import './HomePage.scss';

const HomePage = ({fetchCreateGame, joinToken, _id}) => {
    const [nickName, setNickName] = useState('');
    const startGame = () => {
        fetchCreateGame({"userName": nickName});
    }


    return (
        <NameField enterClick={startGame} joinToken={joinToken} nickName={nickName} setNickName={setNickName} />
    );
};
export default connect(({gameConfigs}) => ({...gameConfigs}), gameConfigActions)(HomePage);
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NameField} from "../../components";
import socket from "../../socket";
import {gameConfigActions} from '../../redux/actions';
import './HomePage.scss';

const HomePage = ({fetchCreateGame, setGameData, joinToken, _id}) => {
    const [nickName, setNickName] = useState('');
    const startGame = () => {
        fetchCreateGame({"userName": nickName});
    }
    useEffect(() => {
        if(_id) {
            socket.emit('join', _id);
        }
    }, [_id]);

    useEffect(() => {
        socket.on('SERVER:USER_JOINED', (gameObj) => {
            if (gameObj) {
                const data = JSON.parse(gameObj);
                setGameData(data);
            }
        });
        // socket.on('SERVER:MESSAGES_READED', updateReadedStatus);
        // return () => {
        //     socket.removeListener('SERVER:DIALOG_CREATED', fetchDialogs);
        //     socket.removeListener('SERVER:NEW_MESSAGE', fetchDialogs);
        // };
    }, []);


    return (
        <NameField enterClick={startGame} joinToken={joinToken} nickName={nickName} setNickName={setNickName} />
    );
};
export default connect(({gameConfigs}) => ({...gameConfigs}), gameConfigActions)(HomePage);
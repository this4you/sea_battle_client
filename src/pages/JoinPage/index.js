import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {gameConfigActions} from "../../redux/actions";
import {NameField} from "../../components";

const VerifyPage = ({history, _id, fetchJoinGame, fetchGameInfo}) => {
    const [nickName, setNickName] = useState('');
    useEffect(() => {
        if (_id) {
            history.push('/');
        }
    }, [_id]);
    const joinToGame = () => {
        const joinToken = window.location.pathname.split('join/')[1];
        fetchJoinGame({
            userB: nickName,
            joinToken: joinToken
        }).then(({status}) => {
            if (status === "success") {
                fetchGameInfo();
            }
        })
    }
    return (
        <NameField setNickName={setNickName} nickName={nickName} enterClick={joinToGame}/>
    );
};
export default connect(({gameConfigs}) => ({...gameConfigs}), gameConfigActions)(VerifyPage);
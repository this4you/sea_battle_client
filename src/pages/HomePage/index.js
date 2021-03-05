import React, { useState } from 'react';
import './HomePage.scss';

const HomePage = ({isGameStarted = true}) => {
    const [nickName, setNickName] = useState('');

    const startGame = () => {
        alert(nickName);
    }

    return (
        <div className="home">
            <div className="home-wrap">
                <div className="home-wrap-left">
                    <h1>SEA battle</h1>
                </div>
                <div className="home-wrap-right">
                    <div className="home-wrap-right-nameform">
                        {isGameStarted}
                        <h1>Enter your name</h1>
                        <input className='name-input' value={nickName} onChange={e => setNickName(e.target.value)}></input>
                    </div>
                    <h2 onClick={startGame}>GO</h2>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
import React from 'react';
import './HomePage.scss';

const HomePage = () => {

    return (
        <div className="home">
            <div className="home-wrap">
                <div className="home-wrap-left">
                    <h1>SEA battle</h1>
                </div>
                <div className="home-wrap-right">
                    <div className="home-wrap-right-nameform">
                        <h1>Enter your name</h1>
                        <input className='name-input'></input>
                    </div>
                    <h2>GO</h2>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
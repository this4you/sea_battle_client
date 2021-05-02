import React, {useState} from 'react';

import './NameField.scss';
import {notification} from "antd";
import {LinkOutlined, SmileOutlined} from "@ant-design/icons";

const NameField = ({joinToken, enterClick, nickName, setNickName}) => {
    const linkText = `http://${window.location.hostname}:3000/join/${joinToken}`;

    const copyLink = () => {
        const textField = document.createElement('textarea')
        textField.innerText = linkText;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        notification.open({
            message: 'Link copied to clipboard',
            description:
                'Send link to your friend to start the game! Good luck =)',
            icon: <SmileOutlined style={{color: '#108ee9'}}/>,
        });
    }
    return (
        <div className="home">
            <div className="home-wrap">
                <div className="home-wrap-left">
                    <h1>SEA battle</h1>
                </div>
                <div className="home-wrap-right">
                    {!joinToken ?
                        (<>
                            <div className="home-wrap-right-nameform">
                                <h1>Enter your name</h1>
                                <input className='name-input' value={nickName}
                                       onChange={e => setNickName(e.target.value)}/>
                            </div>
                            <h2 onClick={enterClick}>GO</h2>
                        </>) :
                        (<>
                            <div className="home-wrap-right-link" onClick={copyLink}>
                                <div className="link-container">
                                    <LinkOutlined className="link-icon"/>
                                    <input readOnly className="link-container-text" value={linkText}/>
                                </div>
                                <h5>join link</h5>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NameField;

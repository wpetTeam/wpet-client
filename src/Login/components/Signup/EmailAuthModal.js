import React, { useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { ModalContainer, ModalFrame, Text } from 'Login/styles/style.js';
import 'Login/styles/_style.scss';
import { useInterval } from 'utils';
import { handleAuthCompare } from 'Login/apis';

const EmailAuthModal = (props) => {
    const [authCode, setAuthCode] = useState('');
    const [count, setCount] = useState(180);
    const [isRunning, setIsRunning] = useState(true);
    const delay = 1000;

    useInterval(
        () => {
            if (count === 0) {
                // props.setShowEmailAuth(false);
                //props.setShowLogin(true);
                setIsRunning(false);
            } else {
                setCount(count - 1);
            }
        },
        isRunning ? delay : null,
    );

    const handleAuth = (e) => {
        setAuthCode(e.target.value);
    };

    return (
        <ModalContainer className="auth-modal">
            <ModalFrame>
                <div className="header">
                    <SiMinutemailer className="sending-icon" />
                    <Text className="header-text">본인 확인</Text>
                </div>
                <div className="main">
                    <Text className="desc-text">
                        본인 인증을 위해 3분 이내에 <br />
                        이메일로 발송된 인증번호를 입력해주세요.
                    </Text>
                    <div className="auth-container">
                        <input
                            className="auth-input"
                            type="text"
                            value={authCode}
                            onChange={handleAuth}
                        />
                        {authCode.length > 0 && (
                            <button
                                className="compare-button"
                                onClick={() =>
                                    handleAuthCompare(
                                        props.email,
                                        authCode,
                                        props.setShowEmailAuth,
                                        props.setShowLogin,
                                    )
                                }
                            >
                                확인
                            </button>
                        )}
                    </div>
                </div>
                <div className="footer">
                    <Text className="time-text">
                        남은 인증시간 : <span> {count} </span>초
                    </Text>
                    <button className="resend-button">재전송</button>
                </div>
            </ModalFrame>
        </ModalContainer>
    );
};
export default EmailAuthModal;

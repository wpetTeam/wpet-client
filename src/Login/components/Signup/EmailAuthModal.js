import React, { useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { IoIosClose } from 'react-icons/io';
import { Eclipse, AuthContainer, AuthFrame, Text } from 'Login/styles/style.js';
import 'Login/styles/_style.scss';
import { useInterval } from 'utils';
import { handleAuthCompare, sendAuthMail } from 'Login/apis';

const EmailAuthModal = (props) => {
    const [authCode, setAuthCode] = useState('');
    const [count, setCount] = useState(180);
    const [isRunning, setIsRunning] = useState(true);
    const delay = 1000;

    useInterval(
        () => {
            if (count === 0) {
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

    const handleResendAuth = () => {
        sendAuthMail(
            props.email,
            props.setEmail,
            props.setShowSignup,
            props.setShowEmailAuth,
            1,
        );
        setCount(180);
        setIsRunning(true);
    };

    return (
        <AuthContainer className="auth-modal">
            <Eclipse>
                <IoIosClose
                    className="close-icon"
                    size={30}
                    style={{ padding: '10px' }}
                    onClick={() => {
                        props.setShowEmailAuth(false);
                        props.setBlur(false);
                    }}
                />
            </Eclipse>
            <AuthFrame>
                <div className="header">
                    <SiMinutemailer className="sending-icon" size={20} />
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
                    {count === 0 && (
                        <button
                            className="resend-button"
                            onClick={handleResendAuth}
                        >
                            재전송
                        </button>
                    )}
                </div>
            </AuthFrame>
        </AuthContainer>
    );
};
export default EmailAuthModal;

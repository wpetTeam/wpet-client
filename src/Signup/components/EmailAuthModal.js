import React, { useState } from 'react';
import { SiMinutemailer } from 'react-icons/si';
import { IoIosClose } from 'react-icons/io';
import { useInterval } from 'utils';
import { sendAuthCompare, sendAuthMail } from 'Signup/apis';
import { Eclipse, Text } from 'assets/styles/common/loginSignup';
import { AuthContainer, AuthFrame } from 'Signup/styles/style.js';
import 'Signup/styles/_style.scss';

const EmailAuthModal = (props) => {
    const [authCode, setAuthCode] = useState(''); //인증번호
    const [isMatchCode, setIsMatchCode] = useState(false); //인증번호 비교 실패

    // 180초 타이머 관련 함수
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
    //인증번호 Input Onchange
    const handleAuth = (e) => {
        setAuthCode(e.target.value);
    };
    //인증번호 재전송 버튼
    const handleResendAuth = () => {
        sendAuthMail(props.email, true);
        setCount(180);
        setIsRunning(true);
    };
    //인증번호 비교 버튼
    const handleCompareBtn = () => {
        sendAuthCompare(
            props.email,
            authCode,
            props.setShowsAuth,
            props.setShowsWelcome,
            setIsMatchCode,
        );
    };
    return (
        <AuthContainer className="auth-modal">
            <Eclipse>
                <IoIosClose
                    className="close-icon"
                    size={30}
                    style={{ padding: '10px' }}
                    onClick={() => {
                        props.setShowsSignupContainer(false);
                        props.setBlur(false);
                        props.setNeedsAuth(false);
                    }}
                />
            </Eclipse>
            <AuthFrame>
                <div className="header">
                    {props.needsAuth ? (
                        <p className="already-text">
                            가입된 이메일입니다.
                            <br /> 본인 확인을 진행해주세요.
                        </p>
                    ) : (
                        <>
                            <SiMinutemailer
                                className="sending-icon"
                                size={20}
                            />
                            <Text className="header-text">본인 확인</Text>
                        </>
                    )}
                </div>
                <div className="main">
                    <Text className="desc-text">
                        이메일로 발송된
                        <br /> 인증번호를 입력해주세요.
                    </Text>
                    <div className="auth-container">
                        <div className="auth-input-container">
                            <input
                                className="auth-input"
                                type="text"
                                value={authCode}
                                onChange={handleAuth}
                            />
                            {authCode.length > 0 && isMatchCode && (
                                <p className="auth-text">
                                    인증번호가 일치하지 않습니다.
                                </p>
                            )}
                        </div>
                        {authCode.length > 0 && (
                            <button
                                className="compare-button"
                                onClick={handleCompareBtn}
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

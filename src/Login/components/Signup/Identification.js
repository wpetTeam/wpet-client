import React, { useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import {
    BoldText,
    ModalContainer,
    ModalFrame,
    Text,
} from 'Login/styles/style.js';
import 'Login/styles/_style.scss';
import { useInterval } from 'utils';

const Modal = (props) => {
    const [count, setCount] = useState(180);
    const [isRunning, setIsRunning] = useState(true);
    const delay = 1000;

    useInterval(
        () => {
            if (count === 1) {
                props.setIsSignupCompleted(false);
                props.setShowLogin(true);
                setIsRunning(false);
            } else {
                setCount(count - 1);
            }
        },
        isRunning ? delay : null,
    );

    return (
        <ModalContainer className="signup-modal">
            <ModalFrame>
                <BsFillPatchCheckFill className="check-icon" />
                <BoldText className="thank-text">Thank you</BoldText>
                <Text className="success-text">
                    본인 확인을 위해 3분 이내에 <br /> 이메일로 발송된{' '}
                    <span>인증번호 6자리</span>를 입력해주세요.
                </Text>
                <div className="identification-container">
                    <input className="number" type="text" />
                </div>
                <Text className="move-text">
                    남은 인증시간 : <span> {count} </span>초
                </Text>
            </ModalFrame>
        </ModalContainer>
    );
};
export default Modal;

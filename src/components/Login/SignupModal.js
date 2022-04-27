import React, { useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

import {
    BoldText,
    ModalContainer,
    ModalFrame,
    Text,
} from 'assets/styles/Login/style';
import 'assets/styles/Login/_style.scss';
import { useInterval } from 'utils';

const Modal = (props) => {
    const [count, setCount] = useState(3);
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
        <ModalContainer>
            <ModalFrame>
                <BsFillPatchCheckFill className="complete-icon" />
                <BoldText className="thank-text">Thank you</BoldText>
                <Text className="success-text">
                    <span>wpet</span> 의 계정이 성공적으로 생성되었습니다.
                </Text>
                <Text className="move-text">
                    <span>{count} </span>초 후 로그인 화면으로 이동합니다.
                </Text>
            </ModalFrame>
        </ModalContainer>
    );
};
export default Modal;

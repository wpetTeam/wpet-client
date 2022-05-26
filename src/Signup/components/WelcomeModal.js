import React, { useState } from 'react';
import Character from 'assets/images/Logo/welcome-character.png';
import { useInterval } from 'utils';

const WelcomeModal = (props) => {
    const [count, setCount] = useState(8);
    const [isRunning, setIsRunning] = useState(true);
    const delay = 1000;

    useInterval(
        () => {
            if (count === 1) {
                props.setShowsSignupContainer(false);
                props.setShowLogin(true);
            } else {
                setCount(count - 1);
            }
        },
        isRunning ? delay : null,
    );
    return (
        <div className="welcome-modal">
            <p className="welcome-text">
                <span>wpet</span> 가입을 축하합니다.
            </p>
            <img src={Character} alt="welcome-image" width={200} />
            {count}
        </div>
    );
};
export default WelcomeModal;

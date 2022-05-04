import {
    BoldText,
    LoadingContainer,
    LoadingPicture,
    ModalFrame,
    Text,
} from 'Login/styles/style.js';
import 'Login/styles/_style.scss';
import React, { useState } from 'react';
import { useInterval } from 'utils';
import Logo from 'assets/images/Logo/text-icon.png';

const LoadingModal = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [userName, setUserName] = useState('');
    /* 추후에 이미지 fetch 할 예정  */
    const [profile, setProfile] = useState(
        'https://raw.githubusercontent.com/wpetTeam/wpet-client/feature/src/assets/images/sample.jpg',
    );
    const delay = 2000;

    useInterval(() => {
        setShowProfile(true);
        setUserName('미남누나');
    }, delay);

    return (
        <LoadingContainer>
            <ModalFrame className="loading">
                <BoldText className="thank-text">Welcome Back!</BoldText>
                <LoadingPicture>
                    {!showProfile && (
                        <img className="loading-image" src={Logo} alt="로고" />
                    )}
                    {showProfile && (
                        <img
                            className="profile-image"
                            src={profile}
                            alt="유저 프로필"
                            width={180}
                        />
                    )}
                </LoadingPicture>
                {!showProfile && <Text>로딩 중입니다...</Text>}
                {showProfile && (
                    <Text>
                        <span>
                            <b>{userName}</b>
                        </span>
                        {'  '}님
                    </Text>
                )}
            </ModalFrame>
        </LoadingContainer>
    );
};
export default LoadingModal;

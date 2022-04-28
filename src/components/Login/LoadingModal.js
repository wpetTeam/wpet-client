import {
    BoldText,
    LoadingContainer,
    LoadingPicture,
    ModalFrame,
} from 'assets/styles/Login/style';
import 'assets/styles/Login/_style.scss';
import React, { useState } from 'react';
import Logo from 'assets/images/Logo/text-icon.png';

const LoadingModal = () => {
    const [profile, setProfile] = useState(
        'https://github.com/wpetTeam/wpet-client/blob/feature/src/assets/images/sample.jpg',
    );
    return (
        <LoadingContainer>
            <ModalFrame>
                <BoldText className="thank-text">Welcome Back!</BoldText>
                <LoadingPicture>
                    {/* <img className="loading-image" src={Logo} alt="로고" /> */}
                    <img src={profile} alt="유저 프로필" width={180} />
                </LoadingPicture>
            </ModalFrame>
        </LoadingContainer>
    );
};
export default LoadingModal;

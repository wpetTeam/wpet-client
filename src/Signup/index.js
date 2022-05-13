import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IoIosClose } from 'react-icons/io';

import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import { Input, Button } from 'Login/components';
import { ProfilePicture } from 'Signup/components';
import { onKeyPress } from 'utils';
import { checkUserInfo } from 'utils/signupCheck';
import { handleSignup } from './apis';
import { Eclipse, Text, BoldText } from 'assets/styles/common/loginSignup';
import {
    Container,
    Frame,
    Content,
    Profile,
    Info,
} from 'Signup/styles/style.js';
import 'Signup/styles/_style.scss';

const Signup = (props) => {
    const [profile, setProfile] = useState('');
    const [info, setInfo] = useState({
        nickName: '',
        email: '',
        pw: '',
        passwordConfirm: '',
    });
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChange(e) {
        const value = e.target.value;
        setInfo({
            ...info,
            [e.target.name]: value,
        });
    }
    const handleButton = () => {
        if (checkUserInfo(info.nickName, info.email, info.pw, setErrorMessage))
            return;

        const userData = {
            nickName: info.nickName,
            email: info.email,
            pw: info.pw,
            profilePicture: profile,
        };

        handleSignup(
            userData,
            props.setEmail,
            props.setShowSignup,
            props.setShowEmailAuth,
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container className="signup-container">
                <Eclipse>
                    <img src={LogoImage} width={50} height={50} alt="로고" />
                </Eclipse>
                <Frame className="signup">
                    <IoIosClose
                        className="close-icon"
                        onClick={() => {
                            props.setShowSignup(false);
                            props.setBlur(false);
                        }}
                    />
                    <BoldText className="welcome-text">
                        Welcome to <span>wpet !</span>
                    </BoldText>
                    <Text className="sub-text">
                        반갑습니다. 반려견의 일상을 특별하게 기록해보세요.
                    </Text>
                    <Content>
                        <Profile>
                            <ProfilePicture
                                type="signup"
                                profile={profile}
                                setProfile={setProfile}
                                size="200px"
                            />
                        </Profile>
                        <Info>
                            <Input
                                name="nickName"
                                value={info.nickName}
                                onChange={handleChange}
                                placeholder="닉네임 (1~15자)"
                                marginBottom="4%"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                            />
                            <Text className="alert-text">
                                {errorMessage.name}
                            </Text>
                            <Input
                                name="email"
                                value={info.email}
                                onChange={handleChange}
                                placeholder="이메일"
                                marginBottom="4%"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                            />
                            <Text className="alert-text">
                                {errorMessage.email}
                            </Text>
                            <Input
                                password
                                name="pw"
                                value={info.pw}
                                onChange={handleChange}
                                placeholder="비밀번호 (알파벳,숫자,특수문자를 포함한 8~13자)"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                                marginBottom="4%"
                            />
                            <Text className="alert-text">
                                {errorMessage.password}
                            </Text>
                            <Input
                                password
                                name="passwordConfirm"
                                value={info.passwordConfirm}
                                onChange={handleChange}
                                placeholder="비밀번호 확인"
                                marginBottom="4%"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                            />
                            {info.passwordConfirm !== '' &&
                                info.pw !== info.passwordConfirm && (
                                    <Text className="alert-text">
                                        비밀번호가 일치하지 않습니다.
                                    </Text>
                                )}
                            <Button
                                name="submit"
                                text="인증번호 받기"
                                marginTop="6%"
                                onClick={handleButton}
                            />
                        </Info>
                    </Content>
                </Frame>
            </Container>
        </ThemeProvider>
    );
};
export default Signup;

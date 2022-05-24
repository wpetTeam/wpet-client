import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import {
    NameInput,
    EmailInput,
    PwInput,
    PwConfirmationInput,
} from './components/functions';
import { Button } from 'Login/components';
import { ProfilePicture } from 'Signup/components';
import { onKeyPress } from 'utils';
import { CheckPwDetail, checkUserInfo } from 'Signup/utils/signupCheck';
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
    const [errMessage, setErrMessage] = useState({
        name: '',
        email: '',
        pw: '',
    });
    const [pwErrorCheck, setPwErrorCheck] = useState({
        number: false,
        symbol: false,
        length: false,
    });
    function handleChange(e) {
        const value = e.target.value;
        setInfo({
            ...info,
            [e.target.name]: value,
        });
        if (e.target.name === 'pw') {
            setPwErrorCheck({
                ...pwErrorCheck,
                number: CheckPwDetail(value, 0),
                symbol: CheckPwDetail(value, 1),
                length: CheckPwDetail(value, 2),
            });
        }
        setErrMessage({
            ...errMessage,
            name: '',
            email: '',
            pw: '',
        });
    }
    const handleButton = () => {
        if (checkUserInfo(info.nickName, info.email, info.pw, setErrMessage))
            return;
        const userData = {
            nickName: info.nickName,
            email: info.email,
            pw: info.pw,
            profilePicture: profile,
            location: '',
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
                            <NameInput
                                info={info}
                                errMessage={errMessage}
                                handleChange={handleChange}
                                onKeyPress={onKeyPress}
                                handleButton={handleButton}
                            />
                            <EmailInput
                                info={info}
                                errMessage={errMessage}
                                handleChange={handleChange}
                                onKeyPress={onKeyPress}
                                handleButton={handleButton}
                            />
                            <PwInput
                                info={info}
                                errMessage={errMessage}
                                pwErrorCheck={pwErrorCheck}
                                handleChange={handleChange}
                                onKeyPress={onKeyPress}
                                handleButton={handleButton}
                            />
                            <PwConfirmationInput
                                info={info}
                                handleChange={handleChange}
                                onKeyPress={onKeyPress}
                                handleButton={handleButton}
                            />
                            <Button
                                name="submit"
                                text="본인 인증"
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

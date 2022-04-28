import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import { Input, Button } from 'components/Login';
import { onKeyPress } from 'utils';
import { IoIosClose } from 'react-icons/io';
import {
    Eclipse,
    LoginFrame,
    Text,
    LoginContainer,
    BoldText,
} from 'assets/styles/Login/style';
import 'assets/styles/Login/_style.scss';

const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value,
        });
    }

    const handleButton = () => {
        props.setShowLogin(false);
        props.setIsLoading(true);
    };

    const handleSignupButton = () => {
        props.setShowLogin(false);
        props.setShowSignup(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <LoginContainer>
                <Eclipse>
                    <img src={LogoImage} width={50} height={50} alt="로고" />
                </Eclipse>
                <LoginFrame className="login">
                    <IoIosClose
                        className="close-icon"
                        onClick={() => {
                            props.setShowLogin(false);
                            props.setBlur(false);
                        }}
                    />
                    <BoldText className="welcome-text">
                        Welcome to <span>wpet !</span>
                    </BoldText>

                    <Input
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="이메일"
                        onKeyPress={(e) => onKeyPress(e, handleButton)}
                    />
                    <Input
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        password
                        onKeyPress={(e) => onKeyPress(e, handleButton)}
                    />
                    <Text className="pw-text">비밀번호를 잊어버렸나요?</Text>
                    <Button text="Login" onClick={handleButton} />
                    <BoldText className="or-text">or</BoldText>
                    <Button kakao />
                    <Text className="signup-text">
                        계정이 없다면,
                        <button onClick={handleSignupButton}> Join Us </button>
                        에서 생성하세요!
                    </Text>
                </LoginFrame>
            </LoginContainer>
        </ThemeProvider>
    );
};

export default Login;

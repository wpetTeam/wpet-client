import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import { Input, Button } from 'Login/components';
import { onKeyPress } from 'utils';
import { IoIosClose } from 'react-icons/io';
import {
    Eclipse,
    LoginFrame,
    Text,
    LoginContainer,
    BoldText,
} from 'Login/styles/style.js';
import 'Login/styles/_style.scss';

const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        pw: '',
    });

    function handleChange(e) {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value,
        });
    }

    const handleButton = async () => {
        const res = await fetch('http://localhost:3000/api/user/login', {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'POST',
            body: user,
        });
        if (res.status === 200) {
            props.setShowLogin(false);
        } else {
            alert('실패');
        }
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
                        name="pw"
                        value={user.pw}
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

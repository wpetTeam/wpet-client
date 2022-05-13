import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import { Input, Button } from 'Login/components';
import { onKeyPress, API } from 'utils';
import { Eclipse, Text, BoldText } from 'assets/styles/common/loginSignup';
import { Frame, Container } from 'Login/styles/style.js';
import 'Login/styles/_style.scss';

const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        pw: '',
    });
    var navigate = useNavigate();
    function handleChange(e) {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value,
        });
    }
    const handleButton = async () => {
        const userData = {
            email: user.email,
            pw: user.pw,
        };
        await API.post('/user/login', userData).then((res) => {
            console.log(res);
            if (res.status === 200) {
                navigate('/home');
            }
        });
    };
    const handleSignupButton = () => {
        props.setShowLogin(false);
        props.setShowSignup(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Eclipse>
                    <img src={LogoImage} width={50} height={50} alt="로고" />
                </Eclipse>
                <Frame className="login">
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
                </Frame>
            </Container>
        </ThemeProvider>
    );
};

export default Login;

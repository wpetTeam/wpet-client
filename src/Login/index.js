import React, { useEffect, useState } from 'react';
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
    var navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        pw: '',
    });
    const [errorMsg, setErrorMsg] = useState({
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
    useEffect(() => {
        setErrorMsg({
            email: '',
            pw: '',
        });
    }, [user.email, user.pw]);

    const handleButton = async () => {
        const userData = {
            email: user.email,
            pw: user.pw,
        };

        await API.post('/user/login', userData, {
            withCredentials: true,
        })
            .then(async (res) => {
                console.log('>>> [LOGIN] ✅ SUCCESS', res.data.email);
                if (res.status === 200) {
                    navigate('/home');
                }
            })
            .catch((err) => {
                console.warn('>>> [LOGIN] ❌ ERROR', err.message);
                if (err.response.status === 404) {
                    setErrorMsg({
                        ...errorMsg,
                        email: '존재하지 않는 이메일입니다.',
                    });
                } else if (err.response.status === 401) {
                    setErrorMsg({
                        ...errorMsg,
                        pw: '비밀번호가 올바르지 않습니다.',
                    });
                } else if (err.response.status === 400) {
                    setErrorMsg({
                        ...errorMsg,
                        email: '올바르지 않은 이메일 형식입니다.',
                    });
                } else if (err.response.status === 403) {
                    alert('인증을 안 한 유저');
                }
            });
    };

    const handleSignupButton = () => {
        props.setShowLogin(false);
        props.setShowSignup(true);
    };
    const handlePwFindButton = () => {
        props.setShowLogin(false);
        props.setShowFindPw(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container className="login-container">
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
                        isError={errorMsg.email !== '' ? true : false}
                    />
                    {errorMsg.email !== '' && (
                        <p className="error-text">{errorMsg.email}</p>
                    )}
                    <Input
                        name="pw"
                        value={user.pw}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        password
                        onKeyPress={(e) => onKeyPress(e, handleButton)}
                        isError={errorMsg.pw !== '' ? true : false}
                    />
                    {errorMsg.pw !== '' && (
                        <p className="error-text">{errorMsg.pw}</p>
                    )}
                    <Text className="pw-text" onClick={handlePwFindButton}>
                        비밀번호를 잊어버렸나요?
                    </Text>
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

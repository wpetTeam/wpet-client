import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from 'assets/images/Logo/text-icon.png';
import { Login, Signup } from 'pages';
import { Button } from 'About/components';
import { EmailAuthModal } from 'Signup/components';
import { FindPassword } from 'Login/components';
import { LogoText, ButtonContainer, SubContainer } from 'About/styles/style';

const logo = <img src={Logo} alt="로고" width={60} height={60}></img>;

const Header = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showEmailAuth, setShowEmailAuth] = useState(false);
    const [isNotAuth, setIsNotAuth] = useState(false);
    const [showFindPw, setShowFindPw] = useState(false);
    const [email, setEmail] = useState('');
    const [authCodeText, setAuthCodeText] = useState('');

    const LoginButtonHandler = () => {
        setShowLogin(true);
        props.setBlur(true);
    };

    const SignupButtonHandler = () => {
        setShowSignup(true);
        props.setBlur(true);
    };

    useEffect(() => {}, [email, authCodeText]);

    useEffect(() => {
        setIsNotAuth(false);
        setAuthCodeText('');
    }, []);

    return (
        <Container>
            <SubContainer logo>
                {logo}
                <LogoText>
                    반려견의 일상을 기록하는
                    <br />
                    특별한 일기장
                </LogoText>
            </SubContainer>
            <SubContainer button>
                <ButtonContainer>
                    <Button
                        text="Login"
                        hoverText="Login"
                        onClick={LoginButtonHandler}
                        disabled={showSignup || showLogin ? true : false}
                        isStop={showLogin ? true : false}
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        text="Join Us"
                        hoverText=" Welcome 🐾"
                        onClick={SignupButtonHandler}
                        disabled={showLogin || showSignup ? true : false}
                        isStop={showSignup ? true : false}
                    />
                </ButtonContainer>
            </SubContainer>
            {showLogin && (
                <Login
                    setBlur={props.setBlur}
                    setShowLogin={setShowLogin}
                    setShowSignup={setShowSignup}
                    setShowFindPw={setShowFindPw}
                />
            )}
            {showSignup && (
                <Signup
                    setBlur={props.setBlur}
                    setShowSignup={setShowSignup}
                    setShowLogin={setShowLogin}
                    setShowEmailAuth={setShowEmailAuth}
                    setIsNotAuth={setIsNotAuth}
                    setEmail={setEmail}
                    setAuthCodeText={setAuthCodeText}
                />
            )}
            {showEmailAuth && (
                <EmailAuthModal
                    isNotAuth={isNotAuth}
                    setIsNotAuth={setIsNotAuth}
                    setBlur={props.setBlur}
                    setShowSignup={setShowSignup}
                    setShowLogin={setShowLogin}
                    setShowEmailAuth={setShowEmailAuth}
                    email={email}
                    setEmail={setEmail}
                    authCodeText={authCodeText}
                    setAuthCodeText={setAuthCodeText}
                />
            )}
            {showFindPw && (
                <FindPassword
                    setBlur={props.setBlur}
                    setShowFindPw={setShowFindPw}
                    setShowLogin={setShowLogin}
                />
            )}
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 94%;
    height: 11%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

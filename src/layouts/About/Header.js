import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'assets/images/Logo/text-icon.png';
import { Button } from 'components/About';
import { Login, Signup } from 'pages';
import { SignupModal } from 'components/Login';
import {
    LogoText,
    ButtonContainer,
    SubContainer,
} from 'assets/styles/About/style';

const Container = styled.div`
    width: 94%;
    height: 11%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const logo = <img src={Logo} alt="로고" width={60} height={60}></img>;

const Header = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [isSignupCompleted, setIsSignupCompleted] = useState(false);

    const LoginButtonHandler = () => {
        setShowLogin(true);
        props.setBlur(true);
    };

    const SignupButtonHandler = () => {
        setShowSignup(true);
        props.setBlur(true);
    };

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
                    setShowLogin={setShowLogin}
                    setBlur={props.setBlur}
                    setShowSignup={setShowSignup}
                />
            )}
            {showSignup && (
                <Signup
                    setShowSignup={setShowSignup}
                    setBlur={props.setBlur}
                    setIsSignupCompleted={setIsSignupCompleted}
                />
            )}
            {isSignupCompleted && (
                <SignupModal
                    setShowLogin={setShowLogin}
                    setIsSignupCompleted={setIsSignupCompleted}
                />
            )}
        </Container>
    );
};

export default Header;

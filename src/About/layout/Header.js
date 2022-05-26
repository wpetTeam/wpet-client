import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from 'assets/images/Logo/text-icon.png';
import { Login, SignupContainer } from 'pages';
import { Button } from 'About/components';
import { FindPassword } from 'Login/components';
import { LogoText, ButtonContainer, SubContainer } from 'About/styles/style';

const logo = <img src={Logo} alt="로고" width={60} height={60}></img>;

const Header = (props) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showsSignupContainer, setShowsSignupContainer] = useState(false);
    const [showFindPw, setShowFindPw] = useState(false);

    const LoginButtonHandler = () => {
        setShowLogin(true);
        props.setBlur(true);
    };

    const SignupButtonHandler = () => {
        setShowsSignupContainer(true);
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
                        disabled={
                            showsSignupContainer || showLogin ? true : false
                        }
                        isStop={showLogin ? true : false}
                    />
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        text="Join Us"
                        hoverText=" Welcome 🐾"
                        onClick={SignupButtonHandler}
                        disabled={
                            showLogin || showsSignupContainer ? true : false
                        }
                        isStop={showsSignupContainer ? true : false}
                    />
                </ButtonContainer>
            </SubContainer>
            {showLogin && (
                <Login
                    setBlur={props.setBlur}
                    setShowLogin={setShowLogin}
                    setShowsSignupContainer={setShowsSignupContainer}
                    setShowFindPw={setShowFindPw}
                />
            )}
            {showsSignupContainer && (
                <SignupContainer
                    setBlur={props.setBlur}
                    setShowsSignupContainer={setShowsSignupContainer}
                    setShowLogin={setShowLogin}
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

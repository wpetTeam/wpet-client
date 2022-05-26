import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import styled from 'styled-components';
import { Signup, EmailAuth, Welcome } from './components';

const SignupContainer = (props) => {
    const [email, setEmail] = useState('');
    const [showsSignup, setShowsSignup] = useState(true);
    const [showsAuth, setShowsAuth] = useState(false);
    const [needsAuth, setNeedsAuth] = useState(false);
    const [showsWelcome, setShowsWelcome] = useState(false);

    useEffect(() => {}, [showsSignup, showsAuth, showsWelcome]);

    console.log(needsAuth);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                {showsSignup && (
                    <Signup
                        setBlur={props.setBlur}
                        setShowsSignupContainer={props.setShowsSignupContainer}
                        setShowLogin={props.setShowLogin}
                        setShowsSignup={setShowsSignup}
                        setShowsAuth={setShowsAuth}
                        setNeedsAuth={setNeedsAuth}
                        setEmail={setEmail}
                    />
                )}
                {showsAuth && (
                    <EmailAuth
                        setBlur={props.setBlur}
                        setShowsSignupContainer={props.setShowsSignupContainer}
                        setShowsAuth={setShowsAuth}
                        setShowsWelcome={setShowsWelcome}
                        needsAuth={needsAuth}
                        setNeedsAuth={setNeedsAuth}
                        email={email}
                    />
                )}
                {showsWelcome && (
                    <Welcome
                        setShowsSignupContainer={props.setShowsSignupContainer}
                        setShowLogin={props.setShowLogin}
                    />
                )}
            </Container>
        </ThemeProvider>
    );
};
export default SignupContainer;

const Container = styled.div`
    position: fixed;
    top: 10%;
    left: 5%;

    width: 90%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

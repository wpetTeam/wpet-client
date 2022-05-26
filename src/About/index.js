import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Footer, Header, Main } from './layout';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 2% 3%;

    transition: 0.4s ease-in-out;
    background: ${({ theme }) => theme.aboutBackground};

    &.isBlur {
        transition: 0.4s ease-in-out;
        background: ${({ theme }) => theme.aboutLogoText}99;
        )
    }
`;
const About = () => {
    var naviagate = useNavigate();
    /* Login, Signup 버튼이 눌릴 시  상태 수정*/
    const [blur, setBlur] = useState(false);

    useEffect(() => {
        if (
            document.cookie.split('; ')[1] !== undefined &&
            document.cookie.split('; ')[1].length > 2
        ) {
            console.log(document.cookie.split('; ')[1]);
            naviagate('/home');
        }
    }, [document.cookie]);

    return (
        <ThemeProvider theme={theme}>
            <Container className={blur ? 'isBlur' : ''}>
                <Header setBlur={setBlur} />
                <Main isBlur={blur} />
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

export default About;

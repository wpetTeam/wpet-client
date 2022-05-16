import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Footer, Header, Main } from './layout';

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
    /* Login, Signup 버튼이 눌릴 시  상태 수정*/
    const [blur, setBlur] = useState(false);

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

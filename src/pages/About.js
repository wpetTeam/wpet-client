import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Footer, Header, Main } from 'layouts/About';

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 2% 3%;
    
    transition: 0.4s ease-in-out;
    background: ${({ theme }) => theme.aboutBackground};

    &.isBlur {
        transition: 0.4s ease-in-out;
        background: ${({ theme }) => theme.aboutLogoText}90;
        );
    }
`;
const About = () => {
    const [blur, setBlur] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Container className={blur ? 'isBlur' : ''}>
                <Header setBlur={setBlur} />
                <Main />
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

export default About;

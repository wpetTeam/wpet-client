import React from 'react';
import { theme } from 'assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Main } from 'Home/layouts';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header />
                <Main></Main>
            </Container>
        </ThemeProvider>
    );
};

export default Home;

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.dashboardBackground};
`;

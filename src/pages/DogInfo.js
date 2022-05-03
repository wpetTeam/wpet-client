import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Header, Main } from 'layouts/DogInfo';

const DogInfo = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header />
                <Main />
            </Container>
        </ThemeProvider>
    );
};
export default DogInfo;

const Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.dashboardBackground};
`;
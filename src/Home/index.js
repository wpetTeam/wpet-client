import React, { useState, useEffect } from 'react';
import { theme } from 'assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Main } from 'Home/layouts';
import { API } from 'utils';

const Home = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getAuth = async () => {
            await API.get('/user/auth', {
                withCredentials: true,
            })
                .then((res) => {
                    console.log('>>> [HOME] ✅ SUCCESS', res.data);
                    if (res.status === 200) {
                        setUser(res.data);
                    }
                })
                .catch((err) =>
                    console.log('>>> [HOME] ❌ ERROR', err.message),
                );
        };
        getAuth();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header user={user} />
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

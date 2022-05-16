import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Header, Main } from 'Diary/layouts';
import { API } from 'utils';

const Diary = () => {
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
                <Main />
            </Container>
        </ThemeProvider>
    );
};

export default Diary;

const Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.dashboardBackground};
`;

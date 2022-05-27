import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Main } from 'PetInfo/layouts';
import { Header } from 'Home/layouts';
import { API } from 'utils';

const PetInfo = () => {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        const getBreeds = async () => {
            await API.get('/pet/species', {
                withCredentials: true,
            })
                .then((res) => {
                    console.log('>>> [BREEDS GET] ✅ SUCCESS');
                    if (res.status === 200) {
                        setBreeds(res.data.result);
                    }
                })
                .catch((err) =>
                    console.log('>>> [BREEDS GET] ❌ ERROR', err.message),
                );
        };
        getBreeds();
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Header />
                <Main breeds={breeds} />
            </Container>
        </ThemeProvider>
    );
};
export default PetInfo;

const Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.dashboardBackground};
`;

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { API } from 'utils';

export const Dropdown = () => {
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await API.get('/user/logout', {
            withCredentials: true,
        })
            .then((res) => console.log('>>> [LOGOUT] ✅ SUCCESS', res.data))
            .catch((err) => console.log('>>> [LOGOUT] ❌ ERROR', err.message));
        navigate('/');
    };

    const myAccountHandler = () => {
        navigate('/mypage');
    };

    return (
        <>
            <Container>
                <Button onClick={myAccountHandler}>나의 계정</Button>
                <Button onClick={logoutHandler}>로그아웃</Button>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: absolute;

    top: 8.3%;
    right: 2.3%;
    padding: 0.5%;

    display: flex;
    flex-direction: column;

    z-index: 20;
`;

const Button = styled.div`
    padding: 5px;
    margin-bottom: 9%;

    font-size: 0.7em;
    font-family: 'Elice Digital Baeum', sans-serif;
    text-align: center;

    border: 2px solid ${({ theme }) => theme.aboutBackground};
    background: ${({ theme }) => theme.dashboardBackground};
    box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.aboutBackground}70;

    &:hover {
        cursor: pointer;
        font-weight: 600;
        border: 2px solid ${({ theme }) => theme.aboutLogoText};
        box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.aboutLogoText}70;
    }
`;

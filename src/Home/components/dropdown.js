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
        <Container className="dropdown-menu">
            <button className="dropdown-item" onClick={myAccountHandler}>
                나의 계정
            </button>
            <button className="dropdown-item" onClick={logoutHandler}>
                로그아웃
            </button>
        </Container>
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

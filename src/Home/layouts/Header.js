import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavIcon, UserProfile } from 'Home/components';
import logo from 'assets/images/Logo/text-icon.png';
import 'Home/styles/_style.scss';
import { API } from 'utils';

const Header = () => {
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

    useEffect(() => {}, [user]);
    return (
        <HeaderContainer className="home-header">
            <NavIcon />
            <UserProfile user={user} logo={logo} />
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    width: 93%;
    height: 10%;

    padding: 1% 1.4% 0 1.4%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

import React from 'react';
import styled from 'styled-components';
import { NavIcon, UserProfile } from 'Home/components';
import logo from 'assets/images/Logo/text-icon.png';
import 'Home/styles/_style.scss';

const Header = (props) => {
    return (
        <HeaderContainer className="home-header">
            <NavIcon />
            <UserProfile user={props.user} logo={logo} />
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

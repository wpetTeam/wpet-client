import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { BoldText, Logo, Nav } from 'Home/styles/style';
import { Icon, UserProfile } from 'Home/components';
import logo from 'assets/images/Logo/text-icon.png';
import 'Home/styles/_style.scss';

const Header = (props) => {
    const LogoImage = <img src={logo} alt="로고" width={55} height={55} />;

    return (
        <HeaderContainer className="home-header">
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <Logo>
                    {LogoImage}
                    <BoldText className="logo-text">wpet</BoldText>
                </Logo>
            </Link>

            <Nav>
                <Icon name="diary" isSelect />
                <Icon name="dog-info" />
                <Icon name="community" />
                <Icon name="settings" />
            </Nav>
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

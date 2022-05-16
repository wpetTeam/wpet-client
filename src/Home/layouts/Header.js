import React from 'react';
import styled from 'styled-components';

import { BoldText, Logo, Nav } from 'Home/styles/style';
import { Icon, UserProfile } from 'Home/components';
import logo from 'assets/images/Logo/text-icon.png';
import 'Home/styles/_style.scss';

const Header = (props) => {
    const LogoImage = <img src={logo} alt="로고" width={55} height={55} />;

    return (
        <HeaderContainer className="home-header">
            <Logo>
                {LogoImage}
                <BoldText className="logo-text">wpet</BoldText>
            </Logo>
            <Nav>
                <Icon name="diary" isShow />
                <Icon name="dog-info" isShow />
                <Icon name="community" isShow />
                <Icon name="settings" isShow />
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

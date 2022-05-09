import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillPatchPlusFill as DropDownIcon } from 'react-icons/bs';
import { BoldText, Logo, Nav, ProfileNav, Text } from 'Home/styles/style';
import { Icon } from 'Home/components';
import logo from 'assets/images/Logo/text-icon.png';
import 'Home/styles/_style.scss';

const Header = () => {
    const LogoImage = <img src={logo} alt="로고" width={55} height={55} />;
    const [userName, setUserName] = useState('미남누나');
    const [userPic, setUserPic] = useState(
        'https://raw.githubusercontent.com/wpetTeam/wpet-client/feature/src/assets/images/sample.jpg',
    );

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
            <ProfileNav>
                <img
                    className="user-profile-picture"
                    src={userPic}
                    alt="사용자 프로필"
                />
                <Text className="user-name-text">
                    <span>{userName}</span> {'  '}님
                </Text>
                <DropDownIcon size={16} className="user-profile-info" />
            </ProfileNav>
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

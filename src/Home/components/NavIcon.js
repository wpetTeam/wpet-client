import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, BoldText, Nav } from 'Home/styles/style';
import { Icon } from './Icon';
import logo from 'assets/images/Logo/text-icon.png';

export const NavIcon = () => {
    const LogoImage = <img src={logo} alt="로고" width={55} height={55} />;

    const current_location = window.location.href;
    const HOME_URL = 'http://localhost:5000/home';

    const DIARY_URL = 'http://localhost:5000/diary';
    const DIARY_WRITE_URL = 'http://localhost:5000/diary/write';
    const PETINFO_URL = 'http://localhost:5000/pet-info';
    const COMMUNITY_URL = 'http://localhost:5000/community';
    const SETTINGS_URL = 'http://localhost:5000/settings';

    return (
        <>
            <Link to="/home" style={{ textDecoration: 'none' }}>
                <Logo>
                    {LogoImage}
                    <BoldText className="logo-text">wpet</BoldText>
                </Logo>
            </Link>
            {current_location === HOME_URL && (
                <Nav>
                    <Icon name="diary" isShow />
                    <Icon name="pet-info" isShow />
                    <Icon name="community" isShow />
                    <Icon name="settings" isShow />
                </Nav>
            )}
            {current_location === DIARY_URL && (
                <Nav>
                    <Icon name="diary" isSelect />
                    <Icon name="pet-info" />
                    <Icon name="community" />
                    <Icon name="settings" />
                </Nav>
            )}
            {current_location === DIARY_WRITE_URL && (
                <Nav>
                    <Icon name="diary" isSelect />
                    <Icon name="pet-info" />
                    <Icon name="community" />
                    <Icon name="settings" />
                </Nav>
            )}
            {current_location === PETINFO_URL && (
                <Nav>
                    <Icon name="diary" />
                    <Icon name="pet-info" isSelect />
                    <Icon name="community" />
                    <Icon name="settings" />
                </Nav>
            )}
            {current_location === COMMUNITY_URL && (
                <Nav>
                    <Icon name="diary" />
                    <Icon name="pet-info" />
                    <Icon name="community" isSelect />
                    <Icon name="settings" />
                </Nav>
            )}
            {current_location === SETTINGS_URL && (
                <Nav>
                    <Icon name="diary" />
                    <Icon name="pet-info" />
                    <Icon name="community" />
                    <Icon name="settings" isSelect />
                </Nav>
            )}
        </>
    );
};

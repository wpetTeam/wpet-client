import React, { useState } from 'react';
import styled from 'styled-components';
import { SiKakaotalk, SiFacebook, SiInstagram } from 'react-icons/si';
import { ContactButton } from 'About/styles/style';
import 'About/styles/_style.scss';

const Container = styled.div`
    width: 94%;
    height: 5%;
    margin-top: -1.3%;
    display: flex;
    justify-content: center;
`;

const Footer = () => {
    const [clicked, setClicked] = useState(false);

    const showContact = () => {
        setClicked(!clicked);
    };

    return (
        <Container>
            {clicked === false && (
                <ContactButton onClick={showContact}>Contacts</ContactButton>
            )}

            {clicked === true && (
                <ContactButton className="clicked" onClick={showContact}>
                    <SiKakaotalk className="contact-icon kakao" />
                    <SiFacebook className="contact-icon facebook" />
                    <SiInstagram className="contact-icon insta" />
                </ContactButton>
            )}
        </Container>
    );
};

export default Footer;

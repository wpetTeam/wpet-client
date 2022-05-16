import React from 'react';
import styled from 'styled-components';
import { SiKakaotalk } from 'react-icons/si';
const Button = (props) => {
    return (
        <>
            {props.kakao ? (
                <SubmitButton className="kakao" onClick={props.onClick}>
                    <SiKakaotalk size={18} style={{ marginRight: '3%' }} />
                    카카오톡 간편 로그인
                </SubmitButton>
            ) : (
                <SubmitButton
                    onClick={props.onClick}
                    marginTop={props.marginTop}
                    name={props.name}
                >
                    {props.text}
                </SubmitButton>
            )}
        </>
    );
};
export default Button;

const SubmitButton = styled.button.attrs(
    (props) => ({
        marginTop: props.marginTop || '5%',
    }),
    { type: 'button' },
)`
    width: 250px;
    height: 37px;

    margin-top: ${(props) => props.marginTop};

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.aboutLogoText}98;
    font-family: 'Elice Digital Baeum', sans-serif;
    font-weight: 600;
    font-size: 1.1em;
    color: ${({ theme }) => theme.loginBackground};

    border: transparent;
    border-radius: 5px;
    box-shadow: 1.5px 1.5px #868686;

    &:hover {
        transform: scale(1.01);
        transition: 0.3s ease-in-out;
        cursor: pointer;

        background: ${({ theme }) => theme.aboutLogoText};
    }

    &.kakao {
        background: #ffe600;
        color: black;
        font-family: Pretendard Medium;
        font-size: 0.8em;

        &:hover {
            background: #f2cb14;
        }
    }
`;

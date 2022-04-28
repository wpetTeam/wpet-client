import React from 'react';
import styled from 'styled-components';

const InfoInput = styled.input.attrs((props) => ({
    marginBottom: props.marginBottom || '3%',
}))`
    width: 220px;
    height: 33px;

    padding-left: 3%;
    margin-bottom: ${(props) => props.marginBottom};

    background: transparent;

    border: 1.5px solid ${({ theme }) => theme.aboutLogoText}80;
    border-radius: 8px;

    &::placeholder {
        font-size: 0.9em;
        color: ${({ theme }) => theme.aboutLogoText}80;
    }
    &:focus {
        transition: 0.1s ease-in;
        outline: none;
        background: ${({ theme }) => theme.aboutLogoText}05;
        border: 2.5px solid ${({ theme }) => theme.aboutLogoText};
    }
    &:focus::placeholder {
        color: transparent;
    }
`;

const PasswordInput = styled(InfoInput).attrs({
    type: 'password',
})``;

const Input = (props) => {
    return (
        <>
            {props.password ? (
                <PasswordInput
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder}
                    onKeyPress={props.onKeyPress}
                    marginBottom={props.marginBottom}
                />
            ) : (
                <InfoInput
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder}
                    onKeyPress={props.onKeyPress}
                    marginBottom={props.marginBottom}
                />
            )}
        </>
    );
};
export default Input;

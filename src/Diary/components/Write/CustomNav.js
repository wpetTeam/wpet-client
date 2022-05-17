import React from 'react';
import styled from 'styled-components';
import { MdColorLens as ColorPicker } from 'react-icons/md';
import { BsFonts as FontPicker } from 'react-icons/bs';

export const CustomNav = (props) => {
    return (
        <CustomContainer className="custom-nav">
            <CustomButton
                onClick={() => props.setSelectColor(!props.selectColor)}
            >
                <ColorPicker size={23} />
            </CustomButton>
            <CustomButton>
                <FontPicker size={23} />
            </CustomButton>
        </CustomContainer>
    );
};
const CustomContainer = styled.div`
    width: 3%;
    height: fit-content;

    margin-left: 1%;
    padding: 0.8% 0.1%;

    border: 2px solid ${({ theme }) => theme.aboutLogoText}90;
    border-radius: 20px;
`;
const CustomButton = styled.button`
    width: 100%;
    height: 6%;

    margin-bottom: 3px;

    color: ${({ theme }) => theme.aboutLogoText};
    background: transparent;

    border: none;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }
`;

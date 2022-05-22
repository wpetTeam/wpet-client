import React from 'react';
import styled from 'styled-components';
import { MdColorLens as ColorPicker } from 'react-icons/md';
import { BsFonts as FontPicker } from 'react-icons/bs';
import { HexColorPicker } from 'react-colorful';

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
            {props.selectColor && (
                <HexColorPicker
                    className="background-color-picker"
                    color={props.color}
                    onChange={props.setColor}
                />
            )}
        </CustomContainer>
    );
};
const CustomContainer = styled.div`
    width: 100%;
    height: fit-content;

    padding: 0.8% 0.1%;

    border: 1px dotted gray;
    border-radius: 5px;
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

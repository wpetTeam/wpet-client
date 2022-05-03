import React from 'react';
import styled from 'styled-components';
import { StepText } from './StepText';
import { StepBar } from './StepBar';

export const Step = (props) => {
    return (
        <Container>
            <TextContainer>
                <StepText step={props.step} />
            </TextContainer>
            <BarContainer>
                <StepBar step={props.step} />
            </BarContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 250px;
    height: 90%;
    margin-left: 7%;

    display: flex;
    flex-direction: row;
`;
const TextContainer = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const BarContainer = styled.div`
    width: 25%;
    margin-top: 22%;
`;

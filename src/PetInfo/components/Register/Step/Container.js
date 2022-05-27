import React from 'react';
import styled from 'styled-components';
import { StepText, StepBar } from 'PetInfo/components/Register/Step';

export const Step = (props) => {
    return (
        <Container className="step-continer">
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
    width: 18%;
    height: 90%;
    margin-left: 3%;

    display: flex;
    flex-direction: row;
`;
const TextContainer = styled.div`
    width: 70%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const BarContainer = styled.div`
    width: 25%;
    height: 100%;

    display: flex;
    justify-content: center;
`;

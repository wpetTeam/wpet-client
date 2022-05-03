import React, { useState } from 'react';
import styled from 'styled-components';
import { Step } from './Step';

export const Frame = () => {
    const [step, setStep] = useState(1);
    return (
        <Container>
            <Text>아래의 절차를 따라 반려견을 등록해주세요.</Text>
            <Step step={step} />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 1.5%;
    padding-left: 2.5%;
    background: white;
`;

const Text = styled.p`
    margin-left: 5%;
    color: ${({ theme }) => theme.aboutLogoText};
`;

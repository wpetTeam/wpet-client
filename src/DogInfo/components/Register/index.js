import React, { useState } from 'react';
import { Step } from './Step';
import Content from './Content';
import { Container, Text, StepContainer } from 'DogInfo/styles/style';

export const Register = () => {
    const [step, setStep] = useState(1);
    return (
        <Container>
            <Text>아래의 절차를 따라 반려견을 등록해주세요.</Text>
            <StepContainer>
                <Step step={step} />
                <Content step={step} setStep={setStep} />
            </StepContainer>
        </Container>
    );
};

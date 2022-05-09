import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import styled from 'styled-components';

const Content = (props) => {
    return (
        <Container>
            {props.step === 1 && (
                <Step1 step={props.step} setStep={props.setStep} />
            )}
            {props.step === 2 && (
                <Step2 step={props.step} setStep={props.setStep} />
            )}
            {props.step === 3 && (
                <Step3 step={props.step} setStep={props.setStep} />
            )}
        </Container>
    );
};
export default Content;

const Container = styled.div`
    width: 80%;
    height: 90%;

    margin-top: 1%;
    margin-left: 5%;
`;

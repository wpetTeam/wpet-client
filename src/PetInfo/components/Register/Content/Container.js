import React, { useState } from 'react';
import { Step1, Step2, Step3 } from './index';
import styled from 'styled-components';

const Content = (props) => {
    const [picture, setPicture] = useState('');
    const [petInfo, setPetInfo] = useState({
        petName: '',
        gender: '',
        year: '',
        month: '',
        date: '',
        breed: [],
    });
    return (
        <Container>
            {props.step === 1 && (
                <Step1
                    step={props.step}
                    setStep={props.setStep}
                    picture={picture}
                    setPicture={setPicture}
                    petInfo={petInfo}
                    setPetInfo={setPetInfo}
                />
            )}
            {props.step === 2 && (
                <Step2
                    breeds={props.breeds}
                    step={props.step}
                    setStep={props.setStep}
                    petInfo={petInfo}
                    setPetInfo={setPetInfo}
                />
            )}
            {props.step === 3 && (
                <Step3
                    step={props.step}
                    setStep={props.setStep}
                    petInfo={petInfo}
                    picture={picture}
                />
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

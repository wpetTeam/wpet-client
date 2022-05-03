import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import 'assets/styles/DogInfo/_style.scss';

export const StepBar = (props) => {
    console.log(props.step);
    return (
        <Container>
            {Array.from({ length: 9 }).map((item, idx) => (
                <>
                    {(idx + 1) % 2 === 0 && (
                        <BarDiv
                            key={idx}
                            className={
                                props.step * 2 > idx + 1 ? 'checked' : ''
                            }
                        />
                    )}
                    {(idx + 1) % 2 === 1 && (
                        <Icon
                            key={idx}
                            icon="bi:check-circle-fill"
                            className={
                                props.step * 2 - 1 === idx + 1
                                    ? 'step-check-icon pre-checked'
                                    : props.step * 2 - 1 > idx + 1
                                    ? 'step-check-icon checked'
                                    : 'step-check-icon'
                            }
                        />
                    )}
                </>
            ))}
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    margin-left: 7%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BarDiv = styled.div`
    width: 2px;
    height: 16.7%;

    background: ${({ theme }) => theme.dogInfoStepText};
    transform: rotate(180deg);

    &.checked {
        transition: 0.4s ease-in-out;
        background: ${({ theme }) => theme.aboutLogoText};
    }
`;

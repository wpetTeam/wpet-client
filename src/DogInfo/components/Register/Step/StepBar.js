import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import 'DogInfo/styles/_style.scss';

export const StepBar = (props) => {
    return (
        <Container className="register-step-bar">
            {Array.from({ length: 5 }).map((item, idx) => (
                <>
                    {(idx + 1) % 2 === 0 && (
                        <div
                            key={(idx + 10) % 230}
                            className={
                                props.step * 2 > idx + 1
                                    ? 'step-bar checked'
                                    : 'step-bar'
                            }
                        />
                    )}
                    {(idx + 1) % 2 === 1 && (
                        <Icon
                            key={(idx + 10) % 230}
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
    height: 63%;

    margin-top: 110%;
    margin-left: 8%;
`;

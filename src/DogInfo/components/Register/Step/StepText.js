import React from 'react';
import styled from 'styled-components';

export const StepText = (props) => {
    const StepText = [
        { id: 1, step: 'step 1', description: '반려견 기본 정보' },
        { id: 2, step: 'step 2', description: '반려견 종 선택' },
        { id: 3, step: 'step 3 (선택)', description: '반려견 건강 정보' },
        { id: 4, step: 'step 4 (선택)', description: '반려견 생활 정보' },
        { id: 5, step: 'step 5 (선택)', description: '반려견 생활 정보' },
    ];
    return (
        <Container>
            {StepText.map((item, idx) => (
                <StepContainer key={StepText[idx]['id']}>
                    <SmallText
                        className={
                            props.step >= StepText[idx]['id'] ? 'finish' : ''
                        }
                    >
                        {StepText[idx]['step']}
                    </SmallText>
                    <BigText
                        className={
                            props.step >= StepText[idx]['id'] ? 'finish' : ''
                        }
                    >
                        {StepText[idx]['description']}
                    </BigText>
                </StepContainer>
            ))}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 90%;
`;
const StepContainer = styled.div`
    width: 100%;
    height: 17%;
`;
const SmallText = styled.p`
    font-size: 0.75em;
    color: ${({ theme }) => theme.dogInfoStepText};

    &.finish {
        color: ${({ theme }) => theme.aboutLogoText};
        font-weight: 700;
    }
`;
const BigText = styled.p`
    margin-top: -5%;
    margin-left: 0.3%;

    font-size: 0.95em;
    color: ${({ theme }) => theme.aboutLogoText}90;

    &.finish {
        color: ${({ theme }) => theme.aboutLogoText};
        font-weight: 700;
    }
`;

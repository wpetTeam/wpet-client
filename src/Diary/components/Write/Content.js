import React, { useState } from 'react';
import styled from 'styled-components';

export const Content = (props) => {
    var [sentence, setSentence] = useState('');

    const handleWriting = (e) => {
        setSentence((sentence += e.target.value));
        props.setContent(sentence);
    };

    return (
        <Container className="journal-content">
            <TextArea
                maxLength={400}
                placeholder="오늘 하루는 어땠는지 400자 이내로 표현해주세요! "
                onChange={handleWriting}
                color={props.color}
            />
            {Array.from({ length: 7 }).map((item, idx) =>
                idx === 6 ? <Rows position="end" /> : <Rows />,
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding-top: 0.5%;

    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
`;

const Rows = styled.div.attrs((props) => ({
    end: props.position === 'end' ? 'transparent' : '1px solid #c4c4c4',
}))`
    width: 100%;
    height: 14%;

    border-bottom: ${(props) => props.end};
    background: transparen;
`;
const TextArea = styled.textarea`
    position: absolute;

    width: 38.1%;
    height: 58%;

    padding: 0 2%;

    font-family: Pretendard;
    font-size: 1.2em;
    line-height: 3.1em;

    background: transparent;
    border: transparent;

    overflow: hidden;

    z-index: 2;
    resize: none;

    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 0.8em;
        color: ${(props) => props.color}90;
    }
`;

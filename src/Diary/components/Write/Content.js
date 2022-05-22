import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

export const Content = (props) => {
    var [sentence, setSentence] = useState('');

    const handleWriting = (e) => {
        setSentence((sentence += e.target.value));
        props.setContent(sentence);
    };

    return (
        <div className="journal-content">
            <textarea
                className="content-textarea"
                maxLength={400}
                placeholder="오늘 하루는 어땠는지 400자 이내로 표현해주세요! "
                onChange={handleWriting}
                color={props.color}
            />
            {Array.from({ length: 6 }).map((item, idx) =>
                idx === 5 ? (
                    <Rows position="end" key={uuid()} />
                ) : (
                    <Rows key={uuid()} />
                ),
            )}
        </div>
    );
};

const Rows = styled.div.attrs((props) => ({
    end: props.position === 'end' ? 'transparent' : '1px solid #c4c4c4',
}))`
    width: 100%;
    height: 16.5%;

    border-bottom: ${(props) => props.end};
    //border: 2px solid green;
`;

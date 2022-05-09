import React from 'react';
import styled from 'styled-components';

const Today = (props) => {
    var day_name = ['월', '화', '수', '목', '금', '토', '일'];
    var current_day = new Date();

    var year = current_day.getFullYear(),
        month = current_day.getMonth(),
        date = current_day.getDate(),
        day = current_day.getDay();

    return (
        <Container className="date-generator">
            <Text color={props.color}>
                <span>{year}</span>년 <span>{month}</span>월 <span>{date}</span>
                일 <span> {day_name[day - 1]}</span>요일
            </Text>
        </Container>
    );
};

export default Today;

const Container = styled.div`
    width: 47%;
    height: 100%;

    text-align: center;
    border-right: 0.7px solid black;
`;
const Text = styled.p`
    font-size: 1em;
    color: gray;

    & span {
        font-family: Pretendard Medium;
        margin-left: 3px;
        margin-right: 1.5px;
        font-size: 1.3em;
        color: ${(props) => props.color};
    }
`;

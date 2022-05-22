import styled from 'styled-components';
import { CommonContainer } from 'Diary/styles/style';

const RowDiv = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0.7px solid black;
`;

export const Container = styled(CommonContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const Journal = styled.div`
    height: 90%;

    background: whitesmoke;
    border: 0.7px solid black;
`;
export const DateWeather = styled(RowDiv)``;
export const Title = styled(RowDiv)``;
export const Footer = styled(RowDiv)`
    justify-content: flex-end;
    border: transparent;
`;

import styled from 'styled-components';

export const Container = styled.div`
    width: 97%;
    height: 100%;

    padding: 1.5% 2%;

    border-radius: 4px;
`;

/* WriteDiary */
export const WriteContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    background: ${(props) => props.backgroundColor};
`;
export const PictureContainer = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const JournalContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
`;
export const Picture = styled.div`
    width: 100%;
    height: 100%;

    margin-right: 3%;

    background: #85858550;
`;
export const Journal = styled.div`
    height: 90%;

    background: whitesmoke;
    border: 0.7px solid black;
`;
export const DateWeather = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 0.7px solid black;
`;
export const Title = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 0.7px solid black;
`;
export const Input = styled.input`
    width: 85%;
    height: 100%;

    font-size: 1.1em;

    border: transparent;
    background: transparent;

    &:focus {
        outline: none;
    }
    &::placeholder {
        font-size: 0.85em;
        color: ${(props) => props.color}90;
    }
`;

export const FinishButton = styled.div`
    height: 10%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

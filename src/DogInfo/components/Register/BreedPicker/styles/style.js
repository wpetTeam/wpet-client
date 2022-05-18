import styled from 'styled-components';

const rowDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
const colDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

/* index */
export const PickerContainer = styled(rowDiv)`
    width: 80%;
    height: 85%;
    margin-left: 2%;

    flex-wrap: wrap;
`;
export const Select = styled.button`
    width: 10%;
    height: 30%;
`;
export const ImageDiv = styled.div`
    width: 90%;
    height: 55%;
`;
export const TextDiv = styled.div`
    width: 90%;
    height: 20%;

    margin-top: 10%;
`;

/* BreedModal */
export const ModalContainer = styled(colDiv)`
    position: fixed;

    top: 13%;
    right: 30%;

    width: 25%;
    height: 75%;

    background: white;
    border: 5px solid #686868;
`;
export const Header = styled(rowDiv)`
    height: 10%;
    padding: 4%;

    padding-left: 5%;

    align-items: center;
    justify-content: space-between;
`;
export const Main = styled(colDiv)`
    height: 65%;
    padding-left: 5%;

    border: 3px solid transparent;
`;
export const Footer = styled(colDiv)`
    margin-top: -6%;
    padding-left: 5%;
`;
export const Input = styled.input`
    width: 85%;
    height: 12%;
    margin-top: -4%;
    margin-bottom: 8%;
    padding-left: 2%;

    border: 1.5px solid #00000080;
    border-radius: 4px;

    &:focus {
        border: 2px solid #686868;
        outline: none;
    }
`;
export const SearchResult = styled(rowDiv)`
    height: 75%;

    flex-wrap: wrap;
    overflow: auto;
`;
export const Result = styled.div`
    width: fit-content;
    height: 5%;

    margin-bottom: 5px;
    margin-right: 5px;
    padding: 3.5%;

    font-size: 0.83em;
    color: #00000080;
    background: #c4c4c420;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        color: black;
        background: #f3c5b640;
        font-weight: 5 00;
    }
`;
export const SelectContainer = styled(rowDiv)`
    margin-top: -2%;

    justify-content: flex-start;
    flex-wrap: wrap;
`;
export const SelectItem = styled(rowDiv)`
    width: fit-content:
    height: fit-content;

    padding: 1.5%;
    margin-right: 1.5%;
    margin-bottom: 1%;

    align-items: center;
    justify-content: space-between;

    background: #f3c5b680;
    border-radius: 4px;

    font-size: 0.8em;
    font-weight: 600;
`;

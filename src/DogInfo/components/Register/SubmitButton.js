import styled from 'styled-components';

export const SubmitButton = (props) => {
    return (
        <Container onClick={() => props.setStep(props.step + 1)}>
            {props.text}
        </Container>
    );
};

const Container = styled.button`
    width: 120px;
    height: 35px;

    margin-top: -5%;
    margin-left: 60%;

    background: #f3c5b630;
    border: transparent;
    border-radius: 4px;

    color: #686868;

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
        transition: 0.2s ease-in;
        color: black;
        background: #f3c5b680;
    }
`;

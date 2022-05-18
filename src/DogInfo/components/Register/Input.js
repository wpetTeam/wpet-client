import styled from 'styled-components';

export const Input = (props) => {
    return (
        <Container>
            <Form
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                maxLength={props.maxLength}
                width={props.width}
                text={props.text}
                placeholder={props.placeholder}
            />
            {props.text && <Text>{props.text}</Text>}
        </Container>
    );
};

const Container = styled.div`
    width: fit-content;
    height: 30px;

    margin-right: 10px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Form = styled.input.attrs((props) => ({
    width: props.width,
    textAlign: props.text ? 'center' : 'left',
    paddingLeft: props.text ? '0' : '10px',
}))`
    width: ${(props) => props.width};
    height: 30px;

    margin-right: 5px;
    padding-left: ${(props) => props.paddingLeft};

    border: 1px solid #bdbdbd;
    border-radius: 4px;

    text-align: ${(props) => props.textAlign};
    font-family: Pretendard Medium;
    color: black;
    font-weight: 700;
    letter-spacing: 0.1em;

    &:focus {
        outline: none;
        border: 1.5px solid ${({ theme }) => theme.aboutLogoText};
    }
`;

const Text = styled.p`
    font-family: Pretendard;
    font-size: 1em;
    color: #686868;
`;

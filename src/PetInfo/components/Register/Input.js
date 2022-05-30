import styled from 'styled-components';

export const Input = (props) => {
    return (
        <Container>
            <Form
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                disabled={props.disabled}
                maxLength={props.maxLength}
                width={props.width}
                text={props.text}
                empty={props.empty}
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
    paddingLeft: props.text ? '0' : '10px',
    textAlign: props.text ? 'center' : 'left',
    fontWeight: props.disabled ? '500' : '700',
    fontSize: props.disabled ? '0.95em' : '0.8em',
    border: props.disabled
        ? 'transparent'
        : props.empty
        ? '1px solid red'
        : '1px solid #bdbdbd',
}))`
    width: ${(props) => props.width};
    height: 30px;

    margin-right: 5px;
    padding-left: ${(props) => props.paddingLeft};

    text-align: ${(props) => props.textAlign};
    font-family: Pretendard Medium;
    color: black;
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    letter-spacing: 0.1em;

    background: transparent;
    border: ${(props) => props.border};
    border-radius: 4px;

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

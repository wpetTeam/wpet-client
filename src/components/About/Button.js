import styled from 'styled-components';

const AboutButton = styled.button.attrs((props) => ({
    hoverContent: props.hoverText,
}))`
    width: ${(props) => (props.hoverText === 'Login' ? '110px' : '110px')};
    height: 55%;

    margin-right: 10%;
    padding-right: 0;

    background: transparent;
    border: 2px solid transparent;
    border-radius: 20px;

    color: ${({ theme }) => theme.aboutLogoText};
    font-family: Strawberry Muffins;
    font-size: 1.2em;

    transition: 0.4s ease-in;

    &.normal:hover {
        transition: 0.4s ease-out;
        width: ${(props) => (props.hoverText === 'Login' ? '95px' : '130px')};
        border: 2px solid black;
        color: black;
        opacity: 0.8;
        cursor: pointer;
    }

    &.normal:hover span {
        transition: 0.6s;
        display: none;
    }

    &.normal:hover:before {
        transition: 0.6s;
        content: '${(props) => props.hoverContent}';
    }

    &.stop {
        transition: 0.4s ease-out;
        width: ${(props) => (props.hoverText === 'Login' ? '95px' : '130px')};
        border: 2px solid black;
        color: black;
        opacity: 0.8;
    }

    &.stop span {
        display: none;
    }
    &.stop:before {
        content: '${(props) => props.hoverContent}';
    }
`;

const Button = (props) => {
    return (
        <>
            {props.disabled ? (
                props.isStop ? (
                    <AboutButton
                        className="stop"
                        hoverText={props.hoverText}
                        onClick={props.onClick}
                        disabled={props.disabled}
                    >
                        <span>{props.text}</span>
                    </AboutButton>
                ) : (
                    <AboutButton
                        hoverText={props.hoverText}
                        onClick={props.onClick}
                        disabled={props.disabled}
                    >
                        <span>{props.text}</span>
                    </AboutButton>
                )
            ) : (
                <AboutButton
                    className="normal"
                    hoverText={props.hoverText}
                    onClick={props.onClick}
                    disabled={props.disabled}
                >
                    <span>{props.text}</span>
                </AboutButton>
            )}
        </>
    );
};

export default Button;

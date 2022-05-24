import styled from 'styled-components';

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
const AboutButton = styled.button.attrs((props) => ({
    hoverContent: props.hoverText,
}))`
    width: ${(props) => (props.hoverText === 'Login' ? '110px' : '110px')};
    height: 55%;

    margin-right: 10%;

    background: ${({ theme }) => theme.aboutLogoText}20;
    border: transparent;
    border-radius: 9px;
    box-shadow: 3.5px 3px 0px 0px ${({ theme }) => theme.aboutLogoText}70;

    color: ${({ theme }) => theme.aboutLogoText};
    font-family: Strawberry Muffins;
    font-size: 1.2em;

    transition: 0.4s ease-in;

    &.normal:hover {
        cursor: pointer;
        transition: 0.2s;

        width: ${(props) => (props.hoverText === 'Login' ? '95px' : '130px')};

        color: ${({ theme }) => theme.aboutBackground};
        background: ${({ theme }) => theme.aboutLogoText};
        border: transparent;
        box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.aboutLogoText}90;
        opacity: 0.8;
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

        color: ${({ theme }) => theme.aboutLogoText};
        background: ${({ theme }) => theme.aboutLogoText}90;
        border: transparent;
        box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.aboutLogoText};
        opacity: 0.8;
    }

    &.stop span {
        display: none;
    }
    &.stop:before {
        content: '${(props) => props.hoverContent}';
    }
`;

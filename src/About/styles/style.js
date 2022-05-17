import styled from 'styled-components';

/*common parts */
const Flex = styled.div`
    display: flex;
`;
const centerDiv = styled(Flex)`
    align-items: center;
    justify-content: center;
`;
const columnDiv = styled(Flex)`
    flex-direction: column;
    height: 100%;
`;

/* Layout/About/Header */
export const SubContainer = styled.div`
    width: ${(props) => (props.logo ? 'fit-content' : '30%')};
    height: 80%;

    padding-right: ${(props) => (props.logo ? 0 : '3%')};
    margin-top: -2%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.logo ? 'center' : 'flex-start')};
`;
export const LogoText = styled.p`
    margin-top: 14%;
    margin-left: -1%;

    font-size: 0.75em;
    font-family: ${({ theme }) => theme.descriptionFont};
    color: ${({ theme }) => theme.aboutLogoText};
`;
export const ButtonContainer = styled.div`
    width: 40%;
    height: 100%;
    margin-top: 6%;
`;

/* Layout/About/Main */
export const Slider = styled(columnDiv)`
    width: 88%;
`;
export const Content = styled.div`
    height: 95%;
`;
export const Nav = styled(centerDiv)`
    height: 5%;
`;
export const Aside = styled(centerDiv)`
    width: 4%;
`;

/* Layout/About/Footer */
export const ContactButton = styled.button`
    width: 100px;
    height: 30px;

    font-family: ${({ theme }) => theme.englishFont};
    font-size: 1em;
    color: ${({ theme }) => theme.aboutLogoText};

    background: transparent;
    border: 2px solid transparent;
    border-radius: 30px;

    &:hover {
        transition: 0.5s ease-in-out;
        cursor: pointer;
        border: 2px solid ${({ theme }) => theme.aboutLogoText};
        font-size: 1.1em;
    }

    &.clicked {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border: 2px solid rgba(0, 0, 0, 0.7);
    }
`;

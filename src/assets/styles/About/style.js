import styled from 'styled-components';

/*common parts */
const Flex = styled.div`
    display: flex;
`;
const centerDiv = styled(Flex)`
    align-items: center;
    justify-content: center;
`;
const rowDiv = styled(Flex)`
    flex-direction: row;
    width: 100%;
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
    font-family: Pretendard Medium;

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

    font-family: Strawberry Muffins;
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

/* Component/About/Description/page1,page2,page3 */
export const Container = styled(rowDiv)`
    height: 100%;
`;

export const TextContainer = styled(columnDiv)`
    width: 40%;
    padding-left: 7%;
`;

export const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
`;

export const Text = styled.p`
    width: 100%;
    height: fit-content;

    &.concept {
        display: flex;
        align-items: center;

        margin-top: 20%;

        font-size: 1.1em;
        font-family: Pretendard SemiBold;

        color: ${({ theme }) => theme.aboutLogoText};
    }

    &.bold {
        margin-top: 0;
        margin-bottom: 8%;

        font-size: 4em;
        font-family: Strawberry Muffins;
    }

    &.thin {
        font-size: 1.05em;
        font-family: Pretendard Medium;
        line-height: 25px;

        color: rgba(0, 0, 0, 0.65);
    }
    &.light {
        font-size: 0.9em;
        font-family: Pretendard Medium;
        color: rgba(0, 0, 0, 0.6);
    }
    &.light span {
        font-size: 0.88em;
        font-family: Pretendard Light;
        color: rgba(0, 0, 0, 0.5);
    }
`;

/* Component/About/Description/page2*/
export const FunctionContainer = styled(rowDiv)`
    padding-left: 15%;
`;

/* Component/About/Description/page3 */
export const CommunityContainer = styled(columnDiv)`
    width: 40%;
    margin-top: 6%;
`;

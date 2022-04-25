import styled from 'styled-components';

/* Common Styled components */
const Container = styled.div`
    position: fixed;
    top: 10%;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 1000;
`;
const Frame = styled.div`
    height: 600px;

    margin-top: -25px;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.loginBackground};
    border-radius: 20px;
`;
export const Eclipse = styled.div`
    width: 50px;
    height: 50px;

    background: ${({ theme }) => theme.loginBackground};
    border-radius: 50%;

    z-index: 2;
`;
export const BoldText = styled.p`
    font-family: Strawberry Muffins;
    color: rgba(0, 0, 0, 0.9);

    span {
        color: ${({ theme }) => theme.aboutLogoText};
    }
`;
export const Text = styled.p`
    font-family: Pretendard Medium;

    color: rgba(0, 0, 0, 0.7);

    & span {
        color: ${({ theme }) => theme.aboutLogoText};
        font-family: Strawberry Muffins;
    }
`;

/* pages/Login */
export const LoginContainer = styled(Container)`
    left: 33.5%;
    width: 35%;

    transition: 0.4s ease-in-out;
`;
export const LoginFrame = styled(Frame)`
    width: 360px;
`;

/* pages/Signup */
const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SignupContainer = styled(Container)`
    left: 26%;
    width: 50%;

    transition: 0.4s ease-in-out;
`;
export const SignupFrame = styled(Frame)`
    width: 556px;
`;
export const Content = styled.div`
    width: 90%;
    height: 75%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justfy-content: center;
`;
export const Profile = styled(ColumnDiv)`
    width: 45%;
    height: 100%;

    padding-top: 15%;
`;
export const Picture = styled.div`
    width: 180px;
    height: 180px;

    margin-bottom: 5%;
    background: ${({ theme }) => theme.aboutLogoText}20;

    border: 2px dashed ${({ theme }) => theme.aboutLogoText};
    border-radius: 50%;
`;
export const Info = styled.div`
    width: 55%;
    height: 100%;

    padding-left: 7%;
    padding-top: 15%;

    justfy-content: space-between;
`;

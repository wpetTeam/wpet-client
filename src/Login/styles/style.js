import styled from 'styled-components';

/* Common Styled components */
const Container = styled.div`
    transition: 0.4s ease-in-out;

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

    & span {
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
export const Picture = styled.div`
    width: 200px;
    height: 200px;
`;

/* pages/Login */
export const LoginContainer = styled(Container)`
    left: 33.5%;
    width: 35%;
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
export const Info = styled.div`
    width: 55%;
    height: 100%;

    padding-left: 7%;
    padding-top: 15%;

    justfy-content: space-between;
`;

/* component/Login/Modal */
export const ModalContainer = styled(Container)`
    width: 20%;
    height: 40%;

    left: 45%;
    top: 25%;
`;
export const ModalFrame = styled(Frame)`
    width: 460px;
`;

/* component/Login/LoadingModal */
export const LoadingContainer = styled(Container)`
    width: 35%;
    height: 50%;

    top: 23%;
    left: 33.5%;
`;
export const LoadingFrame = styled(Frame)`
    width: 360px;
`;
export const LoadingPicture = styled(Picture)`
    margin-top: 10%;

    border: 2px double ${({ theme }) => theme.aboutLogoText};
`;

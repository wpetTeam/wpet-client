import styled from 'styled-components';
import { CommonContainer, CommonFrame } from 'assets/styles/common/loginSignup';

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* 회원가입 : Signup */
export const Container = styled(CommonContainer)`
    left: 26%;

    width: 49%;
    height: 50%;
`;
export const Frame = styled(CommonFrame)`
    width: 570px;
    height: 440px;
`;
export const Content = styled.div`
    width: 90%;
    height: 70%;

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

/* 본인인증 : EmailAuthModal */
export const AuthContainer = styled(CommonContainer)`
    width: 20%;
    height: 45%;

    left: 40%;
    top: 20%;
`;
export const AuthFrame = styled(CommonFrame)`
    width: 400px;
`;

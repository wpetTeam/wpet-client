import styled from 'styled-components';
import { CommonContainer, CommonFrame } from 'assets/styles/common/loginSignup';

/* 로그인 : Login */
export const Container = styled(CommonContainer)`
    left: 33.5%;

    width: 35%;
    height: 68%;
`;
export const Frame = styled(CommonFrame)`
    width: 360px;
    height: 430px;
`;

/* 비밀번호 찾기 : FindPassword */
export const FindPwContainer = styled(CommonContainer)`
    width: 35%;
    height: 380px;

    left: 33.5%;
`;
export const FindPwFrame = styled(CommonFrame)`
    width: 400px;
`;

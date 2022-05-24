import styled from 'styled-components';

/* Common Styled components */
export const CommonContainer = styled.div`
    transition: 0.4s ease-in-out;

    position: fixed;
    top: 10%;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 1000;
`;
export const CommonFrame = styled.div`
    height: 600px;

    margin-top: -25px;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.loginBackground};
    border-radius: 20px;
`;
export const Eclipse = styled.div.attrs((props) => ({
    background: props.background || 'rgba(244, 231, 227, 1)',
}))`
    width: 50px;
    height: 50px;

    background: ${(props) => props.background};
    border-radius: 50%;

    z-index: 2;
    transition: 0.5s ease-in-out;
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

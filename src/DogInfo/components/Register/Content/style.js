import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.aboutLogoText};
    font-family: Pretendard Medium;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Profile = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 5%;
`;
export const Info = styled.div`
    width: 50%;
    height: 80%;

    margin-top: 2%;
    margin-left: -15%;

    display: flex;
    flex-direction: column;
`;
export const Label = styled.label`
    margin-top: 10px;
    margin-bottom: 5px;
    font-family: Pretendard;
    font-size: 0.75em;
    color: #686868;
`;
export const Button = styled.button`
    width: 35px;
    height: 35px;

    margin-right: 4px;
    color: #686868;

    background: transparent;
    border: 1px solid #bdbdbd;
    border-radius: 4px;

    &:hover,
    &:focus {
        transition: 0.1s ease-in-out;
        cursor: pointer;
        outline: none;
        border: 1.5px solid ${({ theme }) => theme.aboutLogoText};
        color: ${({ theme }) => theme.aboutLogoText};
        font-weight: 700;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 5%;
`;
export const BreedArticle = styled(InputContainer)``;

export const Footer = styled.div`
    width: 80%;
    height: 5%;

    margin-left: 1%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const PlusButton = styled.button`
    height: 34px;

    margin-left: -1%;
    padding-left: 10px;
    padding-right: 10px;

    background: transparent;
    border-radius: 4px;

    color: ${({ theme }) => theme.aboutLogoText};
    font-size: 0.7em;
`;

import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    width: fit-content;
    height: 30px;

    margin-right: 10px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.p`
    font-family: Pretendard;
    font-size: 1em;
    color: #00000095;
`;

export const SelectContainer = styled.button`
    width: 33px;
    height: 33px;

    margin-right: 5px;

    background: transparent;
    border: 1px solid #bdbdbd;
    border-radius: 4px;

    text-align: center;

    &:focus {
        cursor: pointer;
        border: 1.5px solid ${({ theme }) => theme.aboutLogoText};
    }
`;

export const OptionContainer = styled.div`
    width: 180px;
    height: 45px;

    position: absolute;
    top: 120%;
    left: -140%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    background: white;
`;

export const Option = styled.button`
    width: 25px;
    height: 25px;

    margin-right: 2px;
    margin-bottom: 2px;

    background: babypink;

    border: transparent;
    border-radius: 2px;

    font-size: 0.8em;

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.aboutBackground};
    }
`;

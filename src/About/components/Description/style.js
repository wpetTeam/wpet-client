import styled from 'styled-components';

/*common parts */
const Flex = styled.div`
    display: flex;
`;
const rowDiv = styled(Flex)`
    flex-direction: row;
    width: 100%;
`;
const columnDiv = styled(Flex)`
    flex-direction: column;
    height: 100%;
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

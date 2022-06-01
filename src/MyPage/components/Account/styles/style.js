import styled from 'styled-components';

export const Box = styled.div`
    background: ${(props) => props.isUpdate};
    &:hover {
        transform: scale(1.02);
        transition: 0.4s ease-in-out;
        background: #c4c4c4;
    }
`;

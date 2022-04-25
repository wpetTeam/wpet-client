import React from 'react';
import styled from 'styled-components';
import { FaPenSquare } from 'react-icons/fa';
import {
    Container,
    TextContainer,
    ImageContainer,
    Text,
} from 'assets/styles/About/style';

const MoreButton = styled.button`
    width: 30%;
    height: 4.5vh;

    margin-top: 4.5%;

    background-color: rgba(255, 255, 255, 0.3);
    border: transparent;
    border-radius: 5px;

    color: rgba(0, 0, 0, 0.8);

    &:hover {
        cursor: pointer;
        transition: 0.4s ease-out;
        background-color: rgba(255, 255, 255, 0.6);
    }
`;

const Page1 = () => {
    return (
        <Container>
            <TextContainer>
                <Text className="concept">
                    <FaPenSquare size={18} style={{ marginRight: '2%' }} />
                    반려견 일기
                </Text>
                <Text className="bold">
                    Write &amp; Keep <br /> pet's paws!
                </Text>
                <Text className="thin">
                    매일 기록하지 않아도 좋습니다.
                    <br />
                    반려견의 오늘을 담고 있는 사진 한 장과 글은 <br />
                    일상을 특별한 추억으로 남기에 충분합니다.
                </Text>
                <MoreButton>더 알아보기</MoreButton>
            </TextContainer>
            <ImageContainer></ImageContainer>
        </Container>
    );
};

export default Page1;

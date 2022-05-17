import React from 'react';
import { FaPenSquare } from 'react-icons/fa';
import { Container, TextContainer, ImageContainer, Text } from './style';

const Page1 = () => {
    return (
        <Container className="about-1-container">
            <TextContainer className="about-text">
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
                <button className="more-info-btn">더 알아보기</button>
            </TextContainer>
            <ImageContainer></ImageContainer>
        </Container>
    );
};

export default Page1;

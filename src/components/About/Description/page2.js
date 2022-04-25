import React from 'react';
import { RiHeartPulseFill } from 'react-icons/ri';
import { BsFillAlarmFill } from 'react-icons/bs';
import { GiSittingDog } from 'react-icons/gi';
import {
    Container,
    TextContainer,
    ImageContainer,
    Text,
    FunctionContainer,
} from 'assets/styles/About/style';
import 'assets/styles/About/_style.scss';

const Page2 = () => {
    return (
        <Container>
            <ImageContainer></ImageContainer>
            <TextContainer>
                <Text className="concept">
                    <RiHeartPulseFill size={18} style={{ marginRight: '2%' }} />
                    <b>반려견 건강 관리</b>
                </Text>
                <Text className="bold">
                    Healthy pets <br /> Happy pets!
                </Text>
                <Text className="thin">
                    추억이 오래 쌓일 수 있게 체계적으로 관리하세요.
                </Text>
                <FunctionContainer>
                    <BsFillAlarmFill size={23} className="info-icon" />
                    <Text className="light">
                        반려견의 주요 일정을 놓치지 마세요. <br />
                        <span>병원 예약, 약 복용일, 미용 날짜</span>
                    </Text>
                </FunctionContainer>
                <FunctionContainer>
                    <GiSittingDog size={24} className="info-icon" />
                    <Text className="light">
                        반려견의 정보를 잊지 마세요.
                        <br />
                        <span>병원 기록, 복용 약, 산책, 목욕</span>
                    </Text>
                </FunctionContainer>
            </TextContainer>
        </Container>
    );
};

export default Page2;

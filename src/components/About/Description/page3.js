import React from 'react';
import { GiDogHouse } from 'react-icons/gi';
import { Icon } from '@iconify/react';

import {
    Container,
    TextContainer,
    ImageContainer,
    Text,
    CommunityContainer,
} from 'assets/styles/About/style';
import 'assets/styles/About/_style.scss';

const Page3 = () => {
    return (
        <Container>
            <TextContainer>
                <Text className="concept">
                    <GiDogHouse size={18} style={{ marginRight: '2%' }} />
                    <b>반려견 커뮤니티</b>
                </Text>
                <Text className="bold">
                    Community <br /> comes unity!
                </Text>
                <Text className="thin" style={{ marginTop: '-1%' }}>
                    반려견의 다양한 이야기를 함께 나누어요.
                </Text>
                <CommunityContainer>
                    <Icon
                        icon="ic:round-medical-information"
                        className="medical-icon"
                    />
                    <Text className="light" style={{ marginLeft: '1.5%' }}>
                        반려견 정보 마당
                        <br />
                        {/* <Blank /> */}
                        <span>
                            인증된 수의사 선생님이 제공하는 <br />
                            반려견 정보를 알아보세요.
                        </span>
                    </Text>
                </CommunityContainer>
            </TextContainer>

            <ImageContainer></ImageContainer>
        </Container>
    );
};

export default Page3;

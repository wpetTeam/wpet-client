import React, { useState } from 'react';
import {
    Container,
    Text,
    InputContainer,
    Profile,
    Info,
    Footer,
} from './styles/style.js';
import logo from 'assets/images/sample.jpg';
import { Button } from '../Button.js';

const Step3 = (props) => {
    const [dogInfo] = useState({
        name: '임미남',
        profilePicture: '',
        birth: '2014.09.14',
        gender: '남',
        breeds: ['말티즈', '페키니즈', '푸들'],
    });
    return (
        <Container className="page-step3">
            <Text>작성한 반려견 정보를 확인해주세요.</Text>
            <InputContainer>
                <Profile>
                    <img
                        className="dog-picture"
                        src={logo}
                        alt="pictureSection"
                        width={230}
                    />
                </Profile>
                <Info className="dog-info-container">
                    <div className="dog-info-sub">
                        <div className="dog-info name">
                            반려견 이름 <span>{dogInfo.name}</span>
                        </div>
                        <div className="dog-info gender">
                            반려견 성별 <span>{dogInfo.gender}</span>
                        </div>
                    </div>
                    <div className="dog-info birth">
                        반려견 출생년월 <span>{dogInfo.birth}</span>
                    </div>
                    <div className="dog-info breed">
                        반려견 종{' '}
                        <div className="dog-info-breeds">
                            {dogInfo.breeds.map((item) => (
                                <span className="breed">{item}</span>
                            ))}
                        </div>
                    </div>
                </Info>
            </InputContainer>
            <Footer>
                <div></div>
                <Button
                    text="확인 완료 및 등록"
                    setStep={props.setStep}
                    step={props.step}
                />
            </Footer>
        </Container>
    );
};
export default Step3;

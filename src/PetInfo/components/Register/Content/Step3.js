import React from 'react';
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
    console.log(props.petInfo);
    return (
        <Container className="page-step3">
            <Text className="title-text">
                작성한 반려견 정보를 확인해주세요.
            </Text>
            <InputContainer>
                <Profile>
                    <img
                        className="dog-picture"
                        src={props.picture === '' ? logo : props.picture}
                        alt="pictureSection"
                        width={230}
                    />
                </Profile>
                <Info className="dog-info-container">
                    <div className="dog-info-sub">
                        <div className="dog-info name">
                            <p>반려견 이름</p>{' '}
                            <span>{props.petInfo.petName}</span>
                        </div>
                        <div className="dog-info gender">
                            <p>반려견 성별</p>{' '}
                            <span>{props.petInfo.gender}</span>
                        </div>
                    </div>
                    <div className="dog-info birth">
                        <p>반려견 출생년월</p>{' '}
                        <span>
                            {props.petInfo.year}.{props.petInfo.month}.
                            {props.petInfo.date}.
                        </span>
                    </div>
                    <div className="dog-info breed">
                        <p>반려견 종</p>
                        <div className="dog-info-breeds">
                            {props.petInfo.breed.map((item) => (
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

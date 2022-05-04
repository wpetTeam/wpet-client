import { Input } from 'DogInfo/components/Register/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from '../DatePicker';
import { SubmitButton } from '../SubmitButton';

const Step1 = (props) => {
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');

    return (
        <Container className="page-step1">
            <Text>아래의 항목을 입력해주세요.</Text>
            <InputContainer>
                <Profile>
                    <Text className="profile-text">반려견 프로필 사진</Text>
                    <Text className="profile-dsc-text">
                        사진은 1X1 사이즈만 업로드 가능합니다.
                    </Text>
                    <div className="profile"></div>
                </Profile>
                <Info>
                    <Label>반려견 이름</Label>
                    <Input width="230px" />
                    <Label>반려견 출생년월</Label>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Input width="80px" text="년" />
                        {/* <Input width="30px" text="월" />*/}
                        <DatePicker
                            text="월"
                            type="month"
                            month={month}
                            setMonth={setMonth}
                        />
                        <DatePicker
                            text="일"
                            type="date"
                            month={month}
                            date={date}
                            setDate={setDate}
                        />
                    </div>
                    <Label>반려견 성별</Label>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Button>남</Button>
                        <Button>여</Button>
                    </div>
                </Info>
            </InputContainer>
            <SubmitButton
                text="다음 단계"
                setStep={props.setStep}
                step={props.step}
            />
        </Container>
    );
};
export default Step1;

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.aboutLogoText};
    font-family: Pretendard Medium;
`;

const InputContainer = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Profile = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 5%;
`;
const Info = styled.div`
    width: 50%;
    height: 80%;

    margin-top: 2%;
    margin-left: -15%;

    display: flex;
    flex-direction: column;
`;
const Label = styled.label`
    margin-top: 10px;
    margin-bottom: 5px;
    font-family: Pretendard;
    font-size: 0.75em;
    color: #686868;
`;
const Button = styled.button`
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

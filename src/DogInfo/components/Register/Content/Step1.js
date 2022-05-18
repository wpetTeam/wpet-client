import React, { useState } from 'react';
import { Input } from 'DogInfo/components/Register/Input';
import DatePicker from '../DatePicker';
import { Button as SubmitButton } from '../Button';
import {
    Text,
    Container,
    InputContainer,
    Profile,
    Info,
    Label,
    Button,
    Footer,
} from './styles/style';
import { ProfilePicture } from 'Signup/components';

const Step1 = (props) => {
    const [petProfile, setPetProfile] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');

    return (
        <Container className="page-step1">
            <Text>
                아래의 항목을 입력해주세요
                <span className="profile-dsc-text">(*는 필수사항입니다)</span>
            </Text>
            <InputContainer>
                <Profile>
                    <Text className="profile-text">반려견 프로필 사진</Text>
                    <Text className="profile-dsc-text">
                        사진은 1X1 사이즈만 업로드 가능합니다.
                    </Text>
                    <div className="profile">
                        <ProfilePicture
                            size="250px"
                            setProfile={setPetProfile}
                            profile={petProfile}
                        />
                    </div>
                </Profile>
                <Info>
                    <Label>반려견 이름*</Label>
                    <Input width="230px" />
                    <Label>반려견 출생년월* </Label>
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
                    <Label>반려견 성별*</Label>
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
            <Footer>
                <div></div>
                <SubmitButton
                    text="다음 단계"
                    setStep={props.setStep}
                    step={props.step}
                />
            </Footer>
        </Container>
    );
};
export default Step1;

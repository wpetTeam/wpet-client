import React, { useState } from 'react';
import { DatePicker, Button, Input } from 'PetInfo/components/Register';
import { ProfilePicture } from 'Signup/components';
import { EmptyCheck } from './Step1ErrorCheck';
import {
    Text,
    Container,
    InputContainer,
    Profile,
    Info,
    Label,
    Footer,
} from './styles/style';

const Step1 = (props) => {
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    function handleChange(e) {
        props.setPetInfo({
            ...props.petInfo,
            [e.target.name]: e.target.value,
        });
    }
    const HandleButton = () => {
        if (EmptyCheck(props.petInfo, gender, month, date) === true) {
            console.log(gender, month, date);
            alert('필수 항목 입력 다 안함');
        } else {
            props.setPetInfo({
                ...props.petInfo,
                month: month,
                date: date,
                gender: gender,
            });
            props.setStep(props.step + 1);
        }
    };

    return (
        <Container className="page-step1">
            <Text style={{ color: 'black' }}>
                아래의 항목을 입력해주세요
                <span className="profile-dsc-text">(*는 필수사항입니다)</span>
            </Text>
            <InputContainer>
                <PictureComponent
                    picture={props.picture}
                    setPicture={props.setPicture}
                />
                <Info>
                    <PetName
                        petInfo={props.petInfo}
                        handleChange={handleChange}
                    />
                    <PetBirth
                        petInfo={props.petInfo}
                        handleChange={handleChange}
                        month={month}
                        setMonth={setMonth}
                        date={date}
                        setDate={setDate}
                    />
                    <PetGender gender={gender} setGender={setGender} />
                </Info>
            </InputContainer>
            <Footer>
                <div></div>
                <Button text="다음 단계" onClick={HandleButton} />
            </Footer>
        </Container>
    );
};
export default Step1;

function PictureComponent({ setPicture, picture }) {
    return (
        <Profile>
            <Text className="profile-text">반려견 프로필 사진</Text>
            <Text className="profile-dsc-text">
                사진은 1X1 사이즈만 업로드 가능합니다.
            </Text>
            <div className="profile">
                <ProfilePicture
                    size="250px"
                    setProfile={setPicture}
                    profile={picture}
                />
            </div>
        </Profile>
    );
}

function PetBirth({ handleChange, month, setMonth, date, setDate, petInfo }) {
    return (
        <React.Fragment>
            <Label>반려견 출생년월 또는 만난 날(*) </Label>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Input
                    name="year"
                    value={petInfo.year}
                    onChange={handleChange}
                    width="80px"
                    text="년"
                    maxLength={4}
                />
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
        </React.Fragment>
    );
}

function PetGender({ gender, setGender }) {
    return (
        <React.Fragment>
            <Label>반려견 성별(*)</Label>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <button
                    className={
                        gender === '남' ? 'gender-btn select' : 'gender-btn'
                    }
                    onClick={() => setGender('남')}
                >
                    남
                </button>
                <button
                    className={
                        gender === '여' ? 'gender-btn select' : 'gender-btn'
                    }
                    onClick={() => setGender('여')}
                >
                    여
                </button>
            </div>
        </React.Fragment>
    );
}

function PetName({ petInfo, handleChange }) {
    return (
        <>
            <Label>반려견 이름(*)</Label>
            <Input
                name="petName"
                value={petInfo.petName}
                onChange={handleChange}
                width="230px"
            />
        </>
    );
}

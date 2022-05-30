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
import API from 'utils/API.js';
import uuid from 'react-uuid';

const Step3 = (props) => {
    const birthDate =
        props.petInfo.year +
        '-' +
        ('00' + props.petInfo.month).slice(-2) +
        '-' +
        ('00' + props.petInfo.date).slice(-2);

    const handleCreatePet = async () => {
        const petData = {
            petName: props.petInfo.petName,
            birthDate: birthDate,
            petSex: props.petInfo.gender,
            petProfilePicture: props.picture,
            petSpecies: props.petInfo.breed,
        };
        await API.post('/pet/create', petData, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('>>> [CREATE PET] ✅ SUCCESS', res.data.petName);
                window.location.reload(false);
            })
            .catch((err) => {
                console.log('>>> [CREATE PET] ❌ ERROR', err.response);
            });
    };

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
                <PetInfo petInfo={props.petInfo} />
            </InputContainer>
            <Footer>
                <div></div>
                <Button text="확인 완료 및 등록" onClick={handleCreatePet} />
            </Footer>
        </Container>
    );
};
export default Step3;

function PetInfo({ petInfo }) {
    return (
        <Info className="dog-info-container">
            <div className="dog-info-sub">
                <div className="dog-info name">
                    <p>반려견 이름</p> <span>{petInfo.petName}</span>
                </div>
                <div className="dog-info gender">
                    <p>반려견 성별</p> <span>{petInfo.gender}</span>
                </div>
            </div>
            <div className="dog-info birth">
                <p>반려견 출생년월 / 만난 날</p>{' '}
                <span>
                    {petInfo.year}. {('00' + petInfo.month).slice(-2)}.{' '}
                    {('00' + petInfo.date).slice(-2)}
                </span>
            </div>
            <div className="dog-info breed">
                <p>반려견 종</p>
                <div className="dog-info-breeds">
                    {petInfo.breed.map((item) => (
                        <span className="breed" key={uuid()}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </Info>
    );
}

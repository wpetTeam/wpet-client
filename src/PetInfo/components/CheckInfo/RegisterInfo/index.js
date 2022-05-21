import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BreedModal from 'PetInfo/components/Register/BreedPicker/BreedModal';
import { Header, PetName, PetGender, PetBirth, PetBreed } from './components';
import { DateCalculator } from './utils/dateCalculator';

const RegisterInfo = (props) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [petInfo, setPetInfo] = useState({
        petName: '미남이',
        year: '2015',
        month: 9,
        date: 24,
        petSex: '남',
        petProfilePicture: '',
        petSpecies: ['말티즈', '푸들', '페키니즈'],
    });

    const [month, setMonth] = useState(petInfo.month);
    const [date, setDate] = useState(petInfo.date);
    const [breed, setBreed] = useState(petInfo.petSpecies);
    const [gender, setGender] = useState(petInfo.petSex);

    var updateBeforeDday = DateCalculator(
        petInfo.year,
        petInfo.month,
        petInfo.date,
    );
    const [dDay, setDDay] = useState(updateBeforeDday);

    const [showsModal, setShowsModal] = useState(false);

    const handleUpdateInfo = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handlePetGender = () => {
        if (gender === '남') {
            setGender('여');
        } else {
            setGender('남');
        }
    };

    useEffect(() => {
        setPetInfo({
            ...petInfo,
            month: month,
            date: date,
            petSpecies: breed,
            petSex: gender,
        });
    }, [breed, gender, dDay, month, date]);

    const handleUpdateBtn = () => {
        var updateAfterDday = DateCalculator(
            petInfo.year,
            petInfo.month,
            petInfo.date,
        );
        setDDay(updateAfterDday);
        setIsUpdate(false);
    };

    return (
        <Component>
            <div className="color-header"></div>
            <Header
                petInfo={petInfo}
                dDay={dDay}
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
                handleUpdateBtn={handleUpdateBtn}
            />
            <div className="main">
                <PetName
                    petInfo={petInfo}
                    handleUpdateInfo={handleUpdateInfo}
                    isUpdate={isUpdate}
                />
                <PetGender
                    petInfo={petInfo}
                    isUpdate={isUpdate}
                    handlePetGender={handlePetGender}
                />
                <PetBirth
                    petInfo={petInfo}
                    handleUpdateInfo={handleUpdateInfo}
                    isUpdate={isUpdate}
                    month={month}
                    setMonth={setMonth}
                    date={date}
                    setDate={setDate}
                />
                <PetBreed
                    petInfo={petInfo}
                    isUpdate={isUpdate}
                    setShowsModal={setShowsModal}
                />
            </div>
            {showsModal && (
                <BreedModal
                    breed={breed}
                    setBreed={setBreed}
                    setShowModal={setShowsModal}
                />
            )}
        </Component>
    );
};
export default RegisterInfo;

const Component = styled.div`
    width: 100%;
    height: 100%;
`;

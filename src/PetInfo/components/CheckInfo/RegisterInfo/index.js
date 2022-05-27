import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BreedModal from 'PetInfo/components/Register/BreedPicker/BreedModal';
import { Header, PetName, PetGender, PetBirth, PetBreed } from './components';
import { DateCalculator } from './utils/dateCalculator';
import { API } from 'utils';

const RegisterInfo = (props) => {
    const petID = { petID: props.petId };

    const [info, setInfo] = useState([]); // 원래 정보
    const [updateInfo, setUpdateInfo] = useState([]); // 수정 정보

    const [isUpdate, setIsUpdate] = useState(false); // 수정 여부
    const [selectBreed, setSelectBreed] = useState([]); // 반려견 종 선택
    const [showsModal, setShowsModal] = useState(false); // 반려견 종 선택 모달
    const [month, setMonth] = useState(0); // birthDate - month
    const [date, setDate] = useState(0); // birthDate - date
    const [gender, setGender] = useState(''); // 반려견 성별
    const [dDay, setDDay] = useState(0);

    useEffect(() => {
        const getPetInfo = async () => {
            await API.post('/pet/getinfo', petID, {
                withCredentials: true,
            })
                .then((res) => {
                    console.log(
                        '>>> [GET PET] ✅ SUCCESS 🐶',
                        res.data.result.petName,
                    );
                    setInfo(res.data.result);
                })
                .catch((err) => {
                    console.log('>>> [GET PET] ❌ ERROR');
                });
        };
        getPetInfo();
    }, []);

    useEffect(() => {
        if (info !== undefined && info.birthDate !== undefined) {
            console.log('>>> [PET INFO SET] ✅ SUCCESS');
            setUpdateInfo({
                petName: info.petName,
                petSpecies: info.petSpecies,
                petProfilePicture: info.petProfilePicture,
                year: info.birthDate.split('-')[0],
                month: info.birthDate.split('-')[1],
                date: info.birthDate.split('-')[2],
                petSex: info.petSex,
            });
            setMonth(updateInfo.month);
            setDate(updateInfo.date);
            setGender(updateInfo.petSex);
            setSelectBreed(updateInfo.petSpecies);
            setDDay(
                DateCalculator(
                    updateInfo.year,
                    updateInfo.month,
                    updateInfo.date,
                ),
            );
        }
    }, [info]);

    const handleUpdateInfo = (e) => {
        setUpdateInfo({
            ...updateInfo,
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
        setUpdateInfo({
            ...updateInfo,
            month: month,
            date: date,
            petSpecies: selectBreed,
            petSex: gender,
        });
    }, [selectBreed, gender, dDay, month, date]);

    const handleUpdateBtn = () => {
        setDDay(
            DateCalculator(updateInfo.year, updateInfo.month, updateInfo.date),
        );
        setIsUpdate(false);
    };

    return (
        <Component>
            <div className="color-header"></div>
            <Header
                petInfo={updateInfo}
                dDay={dDay}
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
                handleUpdateBtn={handleUpdateBtn}
            />
            <div className="main">
                <PetName
                    petInfo={updateInfo}
                    handleUpdateInfo={handleUpdateInfo}
                    isUpdate={isUpdate}
                />
                <PetGender
                    petInfo={updateInfo}
                    isUpdate={isUpdate}
                    handlePetGender={handlePetGender}
                />
                <PetBirth
                    petInfo={updateInfo}
                    handleUpdateInfo={handleUpdateInfo}
                    isUpdate={isUpdate}
                    month={month}
                    setMonth={setMonth}
                    date={date}
                    setDate={setDate}
                />
                <PetBreed
                    petInfo={updateInfo}
                    isUpdate={isUpdate}
                    setShowsModal={setShowsModal}
                />
            </div>
            {isUpdate && (
                <p className="delete-text">반려견을 삭제하고 싶어요.</p>
            )}
            {showsModal && (
                <BreedModal
                    breeds={props.breeds}
                    selectBreed={selectBreed}
                    setSelectBreed={setSelectBreed}
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

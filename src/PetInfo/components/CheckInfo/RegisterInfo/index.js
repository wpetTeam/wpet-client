import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BreedModal from 'PetInfo/components/Register/BreedPicker/BreedModal';
import { Header, PetName, PetGender, PetBirth, PetBreed } from './components';
import { DateCalculator } from './utils/dateCalculator';
import { API } from 'utils';
import { Icon } from '@iconify/react';

const RegisterInfo = (props) => {
    const petID = { petID: props.petId };
    const [info, setInfo] = useState([]); // 원래 정보
    const [updateInfo, setUpdateInfo] = useState([]); // 수정 정보
    const [isUpdate, setIsUpdate] = useState(false); // 수정 여부
    const [showsModal, setShowsModal] = useState(false); // 반려견 종 선택 모달

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
            var birth = info.birthDate.split('-');
            setUpdateInfo({
                petName: info.petName,
                petSpecies: info.petSpecies,
                petProfilePicture: info.petProfilePicture,
                year: birth[0],
                month: birth[1],
                date: birth[2],
                petSex: info.petSex,
            });
            setMonth(birth[1]);
            setDate(birth[2]);
            setGender(info.petSex);
            setSelectBreed(info.petSpecies);
            setDDay(DateCalculator(birth[0], birth[1], birth[2]));
        }
    }, [info]);

    const [month, setMonth] = useState(); // birthDate - month
    const [date, setDate] = useState(); // birthDate - date
    const [gender, setGender] = useState(); // 반려견 성별
    const [selectBreed, setSelectBreed] = useState(); // 반려견 종 선택
    const [dDay, setDDay] = useState();

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

    const handleUpdateBtn = async () => {
        const birthDate =
            updateInfo.year +
            '-' +
            ('00' + updateInfo.month).slice(-2) +
            '-' +
            ('00' + updateInfo.date).slice(-2);

        const updateData = {
            petID: props.petID,
            updateElement: {
                petName: updateInfo.petName,
                birthDate: birthDate,
                petSex: updateInfo.petSex,
                petSpecies: updateInfo.petSpecies,
            },
        };
        await API.patch('/pet/update', updateData, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('>>> [PET UPDATE] ✅ SUCCESS');
                window.location.reload(false);
            })
            .catch((err) => console.log('>>> [PET UPDATE] ❌ ERROR', err));

        setDDay(
            DateCalculator(updateInfo.year, updateInfo.month, updateInfo.date),
        );
        setIsUpdate(false);
    };

    const handlePetDelete = async () => {
        await API.post('/pet/delete', petID, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('>>> [PET DELETE] ✅ SUCCESS');
                window.location.reload(false);
            })
            .catch((err) => {
                console.log('>>> [PET DELETE] ❌ ERROR');
            });
    };

    return (
        <Component
            className={isUpdate ? 'register-info update' : 'register-info'}
        >
            <div className={isUpdate ? 'color-header update' : 'color-header'}>
                {isUpdate ? (
                    <button className="btn complete" onClick={handleUpdateBtn}>
                        <Icon
                            icon="bxs:message-square-check"
                            className="icon "
                        />
                    </button>
                ) : (
                    <button className="btn" onClick={() => setIsUpdate(true)}>
                        <Icon icon="bxs:message-square-edit" className="icon" />
                    </button>
                )}
            </div>
            <Header petInfo={updateInfo} dDay={dDay} />
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
                <p className="delete-text" onClick={handlePetDelete}>
                    반려견을 삭제하고 싶어요.
                </p>
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

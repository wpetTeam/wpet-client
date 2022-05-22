import uuid from 'react-uuid';
import { Icon } from '@iconify/react';
import { Input } from 'PetInfo/components/Register/Input';
import DatePicker from 'PetInfo/components/Register/DatePicker';
import logo from 'assets/images/Logo/text-icon.png';
import './_style.scss';

export function Header({
    petInfo,
    isUpdate,
    setIsUpdate,
    dDay,
    handleUpdateBtn,
}) {
    return (
        <div className="petinfo-header">
            <img
                className="pet-picture"
                src={
                    petInfo.petProfilePicture === ''
                        ? logo
                        : petInfo.PetProfilePicture
                }
                alt="반려견 프로필"
                width={110}
                height={110}
            />
            <div className="pet-name">
                <div className="text-area">
                    <p className="name-text">{petInfo.petName}</p>
                    <p className="dday-text">D+{dDay}</p>
                </div>
                {isUpdate ? (
                    <button className="btn-area" onClick={handleUpdateBtn}>
                        수정 완료
                    </button>
                ) : (
                    <button
                        className="btn-area"
                        onClick={() => setIsUpdate(true)}
                    >
                        정보 수정
                    </button>
                )}
            </div>
        </div>
    );
}

export function PetName({ petInfo, handleUpdateInfo, isUpdate }) {
    return (
        <div className="main-info">
            <p className="info-label">반려견 이름</p>
            <p className="info-text name">
                <input
                    className={isUpdate ? 'name-input update' : 'name-input'}
                    name="petName"
                    value={petInfo.petName}
                    onChange={handleUpdateInfo}
                    disabled={isUpdate ? false : true}
                />
            </p>
        </div>
    );
}

export function PetGender({ petInfo, isUpdate, handlePetGender }) {
    return (
        <div className="main-info">
            <p className="info-label">반려견 성별</p>
            <p className="info-text gender">
                <span className={isUpdate ? 'gender-text' : ''}>
                    {petInfo.petSex}
                </span>
                {isUpdate && (
                    <Icon
                        icon="dashicons:update"
                        className="gender-change"
                        onClick={handlePetGender}
                    />
                )}
            </p>
        </div>
    );
}

export function PetBirth({
    petInfo,
    handleUpdateInfo,
    isUpdate,
    month,
    setMonth,
    date,
    setDate,
}) {
    return (
        <div className="main-info">
            <p className="info-label">반려견 만난 날</p>
            <div className="info-date">
                <Input
                    name="year"
                    value={petInfo.year}
                    onChange={handleUpdateInfo}
                    width="50px"
                    text="년"
                    disabled={isUpdate ? false : true}
                    maxLength={4}
                />
                <DatePicker
                    text="월"
                    type="month"
                    month={month}
                    setMonth={setMonth}
                    disabled={isUpdate ? false : true}
                />
                <DatePicker
                    text="일"
                    type="date"
                    month={month}
                    date={date}
                    setDate={setDate}
                    disabled={isUpdate ? false : true}
                />
            </div>
        </div>
    );
}

export function PetBreed({ petInfo, isUpdate, setShowsModal }) {
    return (
        <div className="main-info">
            <p className="info-label">견종</p>
            <div className="info-text breed">
                <div className="breed-container">
                    {petInfo.petSpecies.map((item, idx) => (
                        <div
                            key={uuid()}
                            className={
                                isUpdate ? 'breed-item update' : 'breed-item'
                            }
                        >
                            {item}
                            {'   '}
                        </div>
                    ))}
                </div>

                {isUpdate && (
                    <button
                        className="breed-btn"
                        onClick={() => setShowsModal(true)}
                    >
                        수정
                    </button>
                )}
            </div>
        </div>
    );
}
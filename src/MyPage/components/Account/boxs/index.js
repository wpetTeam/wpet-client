import uuid from 'react-uuid';
import IMAGE from 'assets/images/Logo/common-character.png';
import { removePicture, uploadPicture } from 'utils';
import { Icon } from '@iconify/react';
import { API } from 'utils';

export const EmailBox = ({
    info,
    updateEmail,
    setUpdateEmail,
    handleUpdateInfo,
}) => {
    return (
        <div className="email-box">
            {updateEmail ? (
                <Icon
                    className="auth-icon loading"
                    icon="dashicons:email-alt2"
                />
            ) : (
                <Icon
                    className="auth-icon success"
                    icon="ic:baseline-mark-email-read"
                />
            )}
            <div className="user-email">
                <input
                    className={
                        updateEmail ? 'email-input update' : 'email-input'
                    }
                    name="email"
                    value={info.email || ''}
                    onChange={handleUpdateInfo}
                    disabled={updateEmail ? false : true}
                />
                {updateEmail ? (
                    <button
                        className="update-btn auth"
                        onClick={() => setUpdateEmail(false)}
                    >
                        인증
                    </button>
                ) : (
                    <button
                        className="update-btn"
                        onClick={() => setUpdateEmail(true)}
                    >
                        변경
                    </button>
                )}
            </div>
            {updateEmail ? (
                <div className="authcode-check">
                    <p className="auth-text update">
                        이메일로 발송된 인증번호 13자리를 입력해주세요.
                    </p>
                    <input className="authcode-input" placeholder="인증번호" />
                    <button className="update-btn authcode">확인</button>
                </div>
            ) : (
                <p className="auth-text success">이메일 인증 완료</p>
            )}
        </div>
    );
};

export const PwBox = ({ setShowsUpdatePw }) => {
    return (
        <div className="pw-box">
            <Icon className="icon" icon="teenyicons:password-solid" />
            <p>비밀번호 변경을 원하시나요?</p>
            <div className="btn-box">
                <button
                    className="update-btn update"
                    onClick={() => setShowsUpdatePw(true)}
                >
                    네, 변경하고 싶습니다.
                </button>
            </div>
        </div>
    );
};

export const ProfileBox = ({
    info,
    profilePic,
    setProfilePic,
    updateProfile,
    setUpdateProfile,
    handleUpdateInfo,
}) => {
    const completeProfile = async () => {
        const updateUser = {
            nickName: info.nickName,
            profilePicture: profilePic,
        };
        await API.patch('/user/update', updateUser, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('>>> [USER PROFILE UPDATE] ✅ SUCCESS');
                console.log(updateUser);
                setUpdateProfile(false);
            })
            .catch((err) =>
                console.log('>>> [USER PROFILE UPDATE] ❌ ERROR', err),
            );
        setUpdateProfile(false);
    };

    var inputRef;
    return (
        <div className="profile-box">
            <div className="pic-box">
                <img
                    className={updateProfile ? 'user-pic update' : 'user-pic'}
                    src={profilePic === '' ? IMAGE : profilePic}
                    alt="유저 프로필"
                />
                {updateProfile && (
                    <div className="btn-container">
                        <button
                            className="btn delete"
                            onClick={(e) => removePicture(e, setProfilePic)}
                        >
                            삭제
                        </button>
                        <button
                            className="btn reselect"
                            onClick={() => inputRef.click()}
                        >
                            재선택
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            name="profile_img"
                            onChange={(e) => uploadPicture(e, setProfilePic)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                )}
            </div>
            <div className="name-box">
                <input
                    className={
                        updateProfile ? 'name-input update' : 'name-input'
                    }
                    name="nickName"
                    value={info.nickName || ''}
                    onChange={handleUpdateInfo}
                    disabled={updateProfile ? false : true}
                    placeholder="닉네임"
                />
            </div>
            {updateProfile ? (
                <button onClick={completeProfile} className="update-btn">
                    수정 완료
                </button>
            ) : (
                <button
                    onClick={() => setUpdateProfile(true)}
                    className="update-btn"
                >
                    정보 수정
                </button>
            )}
        </div>
    );
};

export const DateBox = ({ info }) => {
    return (
        <div className="date-box">
            가입날짜
            <p>{info.joinDate}</p>
        </div>
    );
};

export const PetBox = ({ userPets, petPics, IMAGE }) => {
    return (
        <div className="pet-box">
            나의 가족
            {userPets.length === 0 ? (
                <p className="noPet-text">등록된 반려견이 없습니다.</p>
            ) : (
                userPets.map((item, idx) => (
                    <div className="pet-item" key={uuid()}>
                        <img
                            className="pet-pic"
                            src={petPics[idx] === null ? IMAGE : petPics[idx]}
                            alt="반려견 사진"
                            width={90}
                            height={90}
                        />
                        {item.petName}
                    </div>
                ))
            )}
        </div>
    );
};

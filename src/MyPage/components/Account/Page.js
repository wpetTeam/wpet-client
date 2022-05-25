import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import logo from 'assets/images/Logo/text-icon.png';
import { API, removePicture, uploadPicture } from 'utils';
import './styles/_style.scss';

const MyAccount = () => {
    const [user, setUser] = useState({});
    const [updateInfo, setUpdateInfo] = useState({});
    const [profilePic, setProfilePic] = useState('');
    const [updateEmail, setUpdateEmail] = useState(false);
    const [updateProfile, setUpdateProfile] = useState(false);

    useEffect(() => {
        const getAuth = async () => {
            await API.get('/user/auth', {
                withCredentials: true,
            })
                .then((res) => {
                    console.log('>>> [ACCOUNT] ✅ SUCCESS', res.data);
                    if (res.status === 200) {
                        setUser(res.data);
                        setUpdateInfo(res.data);
                        setProfilePic(res.data.profilePicture);
                    }
                })
                .catch((err) =>
                    console.log('>>> [ACCOUNT] ❌ ERROR', err.message),
                );
        };
        getAuth();
    }, []);

    const handleUpdateInfo = (e) => {
        setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
    };

    return (
        <Component className="myaccount-component">
            <div className="first-row">
                <EmailBox
                    info={updateInfo}
                    updateEmail={updateEmail}
                    setUpdateEmail={setUpdateEmail}
                    handleUpdateInfo={handleUpdateInfo}
                />
                <PwBox />
                <DateBox info={updateInfo} />
            </div>
            <div className="second-row">
                <ProfileBox
                    info={updateInfo}
                    profilePic={profilePic}
                    setProfilePic={setProfilePic}
                    updateProfile={updateProfile}
                    setUpdateProfile={setUpdateProfile}
                    handleUpdateInfo={handleUpdateInfo}
                />
            </div>
            <div className="third-row">
                <div className="pet-box">미남이</div>
                <div className="community-box">
                    <Icon
                        className="icon no"
                        icon="teenyicons:message-no-access-solid"
                    />
                    커뮤니티에 가입하지 않았습니다.
                </div>
            </div>
        </Component>
    );
};
export default MyAccount;

const Component = styled.div`
    width: 100%;
    height: 93%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

function EmailBox({ info, updateEmail, setUpdateEmail, handleUpdateInfo }) {
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
}

function PwBox({}) {
    return (
        <div className="pw-box">
            <Icon className="icon" icon="teenyicons:password-solid" />
            <p>비밀번호 변경을 원하시나요?</p>
            <div className="btn-box">
                <button className="update-btn update">
                    네, 변경하고 싶습니다.
                </button>
            </div>
        </div>
    );
}

function ProfileBox({
    info,
    profilePic,
    setProfilePic,
    updateProfile,
    setUpdateProfile,
    handleUpdateInfo,
}) {
    var inputRef;
    return (
        <div className="profile-box">
            <div className="pic-box">
                <img
                    className={updateProfile ? 'user-pic update' : 'user-pic'}
                    src={profilePic === '' ? logo : profilePic}
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
                <button
                    onClick={() => setUpdateProfile(false)}
                    className="update-btn"
                >
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
}

function DateBox({ info }) {
    return (
        <div className="date-box">
            가입날짜
            <p>{info.joinDate}</p>
        </div>
    );
}

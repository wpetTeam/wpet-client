import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { API } from 'utils';
import './styles/_style.scss';

const MyAccount = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const getAuth = async () => {
            await API.get('/user/auth', {
                withCredentials: true,
            })
                .then((res) => {
                    console.log('>>> [ACCOUNT] ✅ SUCCESS', res.data);
                    if (res.status === 200) {
                        setUser(res.data);
                    }
                })
                .catch((err) =>
                    console.log('>>> [ACCOUNT] ❌ ERROR', err.message),
                );
        };
        getAuth();
    }, []);
    const userInfo = {
        nickName: '하하',
        email: 'abc@wpet.com',
        joinDate: '2022-05-09',
        profilePicture: '',
    };
    const [updateEmail, setUpdateEmail] = useState(false);
    const [updateInfo, setUpdateInfo] = useState(false);
    return (
        <Component className="myaccount-component">
            <div className="first-row">
                <EmailBox
                    userInfo={user}
                    updateEmail={updateEmail}
                    setUpdateEmail={setUpdateEmail}
                />
                <PwBox />
            </div>
            <div className="second-row">
                <div className="profile-box">
                    <img
                        className="user-picture"
                        src={user.profilePicture}
                        alt="유저 프로필"
                        width={300}
                    />
                    <div className="name-box">
                        <input
                            className="name-input"
                            name="nickName"
                            value={user.nickName}
                            disabled={updateInfo ? false : true}
                        />
                        {updateInfo ? (
                            <button
                                onClick={() => setUpdateInfo(false)}
                                className="update-btn"
                            >
                                수정 완료
                            </button>
                        ) : (
                            <button
                                onClick={() => setUpdateInfo(true)}
                                className="update-btn"
                            >
                                정보 수정
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Date>{userInfo.joinDate}</Date>
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

const Date = styled.div`
    width: 20%;
`;

function EmailBox({ userInfo, updateEmail, setUpdateEmail }) {
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
                    value={userInfo.email}
                    disabled={updateEmail ? false : true}
                />
                {updateEmail ? (
                    <button
                        className="update-btn"
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
            <p>비밀번호 변경을 원하시나요?</p>
            <div className="btn-box">
                <button className="update-btn update">변경하기</button>
            </div>
        </div>
    );
}

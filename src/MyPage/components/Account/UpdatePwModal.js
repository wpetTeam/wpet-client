import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Eclipse } from 'assets/styles/common/loginSignup';
import { API } from 'utils';

export const UpdatePwModal = (props) => {
    const [originPw, setOriginPw] = useState('');
    const [newPw, setNewPw] = useState('');
    const [newPwConfirm, setNewPwConfirm] = useState('');

    const updatePwBtn = async () => {
        if (originPw === '' || newPw === '' || newPw !== newPwConfirm) {
            return;
        }
        const pwData = {
            originPw: originPw,
            newPw: newPw,
        };
        await API.post('/user/update/pw', pwData, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('>>> [PW UPDATE] ✅ SUCCESS');
                props.setShowsUpdatePw(false);
            })
            .catch((err) => console.log('>>> [PW UPDATE] ❌ ERROR', err));
    };

    return (
        <div className="update-pw-modal">
            <Eclipse className="eclipse">
                <Icon icon="ri:lock-password-fill" />
                <Icon
                    icon="ep:close-bold"
                    onClick={() => props.setShowsUpdatePw(false)}
                />
            </Eclipse>
            <div className="frame">
                <p className="text">비밀번호 변경</p>
                <div className="pw-container origin">
                    <label>현재 비밀번호</label>
                    <input
                        type="password"
                        value={originPw}
                        onChange={(e) => setOriginPw(e.target.value)}
                    />
                </div>
                <div className="pw-container origin">
                    <label>새로운 비밀번호</label>
                    <input
                        type="password"
                        value={newPw}
                        onChange={(e) => setNewPw(e.target.value)}
                    />
                </div>
                <div className="pw-container origin">
                    <label>새로운 비밀번호 확인</label>
                    <input
                        type="password"
                        value={newPwConfirm}
                        onChange={(e) => setNewPwConfirm(e.target.value)}
                    />
                </div>
                {newPwConfirm.length > 0 ? (
                    newPw !== newPwConfirm && (
                        <p className="error-text">
                            비밀번호가 일치하지 않습니다.
                        </p>
                    )
                ) : (
                    <p className="error-text no-text">haha</p>
                )}
                <button className="btn" onClick={updatePwBtn}>
                    변경
                </button>
            </div>
        </div>
    );
};

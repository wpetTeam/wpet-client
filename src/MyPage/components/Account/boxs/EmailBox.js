import { useState } from 'react';
import { Icon } from '@iconify/react';
import { sendAuthCode, handleUpdateEmail } from '../apis';

export const EmailBox = ({
    info,
    updateEmail,
    setUpdateEmail,
    handleUpdateInfo,
}) => {
    const [isSend, setIsSend] = useState(false);
    const [authCode, setAuthCode] = useState('');

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
                        onClick={() => sendAuthCode(info.email, setIsSend)}
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
                isSend && (
                    <div className="authcode-check">
                        <p className="auth-text update">
                            이메일로 발송된 인증번호 13자리를 입력해주세요.
                        </p>
                        <input
                            className="authcode-input"
                            value={authCode}
                            onChange={(e) => setAuthCode(e.target.value)}
                            placeholder="인증번호"
                        />
                        <button
                            className="update-btn authcode"
                            onClick={() =>
                                handleUpdateEmail(
                                    info.email,
                                    authCode,
                                    setIsSend,
                                )
                            }
                        >
                            확인
                        </button>
                    </div>
                )
            ) : (
                <p className="auth-text success">이메일 인증 완료</p>
            )}
        </div>
    );
};

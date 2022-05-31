import { API } from 'utils';
import { useState } from 'react';
import { Icon } from '@iconify/react';
export const EmailBox = ({
    info,
    updateEmail,
    setUpdateEmail,
    handleUpdateInfo,
}) => {
    const [isSend, setIsSend] = useState(false);
    const [authCode, setAuthCode] = useState('');

    const sendAuthCode = async () => {
        setIsSend(true);
        await API.post(
            '/user/sendmail/email/update',
            {
                newEmail: info.email,
            },
            {
                withCredentials: true,
            },
        )
            .then((res) => {
                console.log('>>> [UPDATE EMAIL SEND CODE] ✅ SUCCESS');
                setIsSend(true);
            })
            .catch((err) =>
                console.log('>>> [UPDATE EMAIL SEND CODE] ❌ ERRPR'),
            );
    };

    const handleUpdateEmail = async () => {
        await API.post(
            '/user/update/email',
            {
                newEmail: info.email,
                authString: authCode,
            },
            {
                withCredentials: true,
            },
        )
            .then((res) => {
                console.log('>>> [UPDATE EMAIL ] ✅ SUCCESS');
                setIsSend(false);
                window.location.reload(false);
            })
            .catch((err) => console.log('>>> [UPDATE EMAIL ] ❌ ERRPR'));
    };
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
                    <button className="update-btn auth" onClick={sendAuthCode}>
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
                            onClick={handleUpdateEmail}
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

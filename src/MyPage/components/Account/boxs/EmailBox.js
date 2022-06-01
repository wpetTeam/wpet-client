import { useState } from 'react';
import { Icon } from '@iconify/react';
import { sendAuthCode, handleUpdateEmail } from '../apis';
import { Box } from '../styles/style';

export const EmailBox = ({
    info,
    updateEmail,
    setUpdateEmail,
    handleUpdateInfo,
}) => {
    const [isSend, setIsSend] = useState(false);
    const [authCode, setAuthCode] = useState('');

    return (
        <Box className="email-box row" isUpdate={updateEmail ? 'blue' : false}>
            <div className="row-1">
                {updateEmail ? (
                    <Icon className="update" icon="dashicons:email-alt2" />
                ) : (
                    <Icon
                        className="success"
                        icon="ic:baseline-mark-email-read"
                    />
                )}
            </div>
            <div className="row-2 col">
                <div className="col-1 input">
                    {updateEmail && <label>새로운 이메일</label>}
                    <input
                        className={
                            updateEmail ? 'input email update' : 'input email'
                        }
                        name="email"
                        value={info.email || ''}
                        onChange={handleUpdateInfo}
                        disabled={updateEmail ? false : true}
                    />
                </div>
                {updateEmail ? (
                    <button
                        className="col-2 btn"
                        style={{ marginTop: '4%' }}
                        onClick={() => sendAuthCode(info.email, setIsSend)}
                    >
                        인증
                    </button>
                ) : (
                    <button
                        className="col-2 btn"
                        onClick={() => setUpdateEmail(true)}
                    >
                        변경
                    </button>
                )}
            </div>
            {updateEmail ? (
                isSend && (
                    <div className="row-3 auth-check">
                        <p className="text">
                            이메일로 발송된 인증번호 13자리를 입력해주세요.
                        </p>
                        <input
                            className="input auth-code"
                            value={authCode}
                            onChange={(e) => setAuthCode(e.target.value)}
                            placeholder="인증번호"
                        />
                        <button
                            className="btn auth-compare"
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
                <p className="row-3 auth-success">이메일 인증 완료</p>
            )}
        </Box>
    );
};

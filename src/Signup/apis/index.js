import { API } from 'utils';

/* 회원가입 */
export const handleSignup = async (
    userData,
    setEmail,
    setShowSignup,
    setShowEmailAuth,
    setShowsConflict,
    setConflictMsg,
    setIsNotAuth,
) => {
    await API.post('/user/create', userData)
        .then((response) => {
            console.log('>>> [SIGNUP] ✅ SUCCESS', response.data.nickName);
            if (response.status === 200) {
                const authEmail = { email: userData.email };
                var flag = 0;
                setShowSignup(false);
                setShowEmailAuth(true);
                sendAuthMail(
                    authEmail,
                    setEmail,
                    setShowSignup,
                    setShowEmailAuth,
                    flag,
                );
            }
        })
        .catch((err) => {
            console.log('>>> [SIGNUP] ❌ ERROR', err.response);
            if (err.response.status === 409) {
                var errMsg = err.response.data.message;
                setShowsConflict(true);
                if (errMsg === '이메일중복') {
                    setConflictMsg('이메일');
                } else if (errMsg === '닉네임중복') {
                    setConflictMsg('닉네임');
                } else {
                    setConflictMsg('닉네임과 이메일');
                }
            } else if (err.response.status === 403) {
                const authEmail = { email: userData.email };
                var flag = 0;
                setShowSignup(false);
                setShowEmailAuth(true);
                setIsNotAuth(true);
                sendAuthMail(
                    authEmail,
                    setEmail,
                    setShowSignup,
                    setShowEmailAuth,
                    flag,
                );
            }
        });
};

/* 인증번호 보내기 */
export const sendAuthMail = async (email, setEmail, flag) => {
    await API.post('/user/sendauthemail', email)
        .then((res) => {
            console.log('>>> [EMAIL AUTH] ✅ SUCCESS');
            if (res.status === 200) {
                if (flag === 0) {
                    setEmail(email.email);
                } else {
                    setEmail(email);
                }
            } else if (res.status === 403) {
                alert('you already signup');
            }
        })
        .catch((err) => console.log('>>> [EMAIL AUTH] ❌ ERROR', err.response));
};

/* 인증번호 비교하기 */
export const handleAuthCompare = async (
    email,
    authString,
    setShowEmailAuth,
    setShowLogin,
    setAuthCodeText,
) => {
    const authData = {
        email: email.email,
        authString: authString,
    };
    await API.post('/user/compareauthemail', authData)
        .then((res) => {
            console.log('>>> [EMAIL AUTH COMPARE] ✅ SUCCESS');
            if (res.status === 200) {
                alert('success');
                setShowEmailAuth(false);
                setShowLogin(true);
            }
        })
        .catch((err) => {
            console.log('>>> [EMAIL AUTH COMPARE] ❌ ERROR', err.response);
            if (err.response.status === 401) {
                setAuthCodeText('인증번호가 일치하지 않습니다.');
            }
        });
};

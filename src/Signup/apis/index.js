import { API } from 'utils';

/* 회원가입 */
export const handleSignup = async (
    userData,
    setShowsAuth,
    setShowsSignup,
    setShowsConflict,
    setConflictMsg,
    setNeedsAuth,
) => {
    const authEmail = { email: userData.email };
    await API.post('/user/create', userData)
        .then((res) => {
            console.log('>>> [SIGNUP] ✅ SUCCESS');
            setShowsSignup(false);
            setShowsAuth(true);
            if (res.status === 200) {
                sendAuthMail(authEmail);
            }
        })
        .catch((err) => {
            console.log('>>> [SIGNUP] ❌ ERROR :', err);
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
                sendAuthMail(authEmail);
                setShowsSignup(false);
                setShowsAuth(true);
                setNeedsAuth(true);
            }
        });
};

/* 인증번호 보내기 */
export const sendAuthMail = async (email) => {
    await API.post('/user/sendauthemail', email)
        .then((res) => {
            console.log('>>> [EMAIL AUTH] ✅ SUCCESS');
            if (res.status === 200) {
            }
        })
        .catch((err) => console.log('>>> [EMAIL AUTH] ❌ ERROR', err.response));
};

/* 인증번호 비교하기 */
export const sendAuthCompare = async (
    email,
    authCode,
    setShowsAuth,
    setIsMatchCode,
) => {
    console.log(email, authCode);
    const authData = {
        email: email,
        authString: authCode,
    };
    await API.post('/user/compareauthemail', authData)
        .then((res) => {
            console.log('>>> [EMAIL AUTH COMPARE] ✅ SUCCESS');
            if (res.status === 200) {
                setShowsAuth(false);
            }
        })
        .catch((err) => {
            console.log('>>> [EMAIL AUTH COMPARE] ❌ ERROR', err.response);
            if (err.response.status === 401) {
                setIsMatchCode(true);
            }
        });
};

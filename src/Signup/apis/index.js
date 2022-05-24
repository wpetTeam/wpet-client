import { API } from 'utils';

/* 회원가입 */
export const handleSignup = async (
    userData,
    setEmail,
    setShowSignup,
    setShowEmailAuth,
    setShowsConflict,
    setConflictMsg,
) => {
    await API.post('/user/create', userData)
        .then((response) => {
            console.log('>>> [SIGNUP] SUCCESS', response.data.email);
            if (response.status === 200) {
                const authEmail = { email: userData.email };
                var flag = 0;
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
                /* 403 : 이메일 인증을 하지 않음 -> 이메일 인증 페이지 */
            }
        });
};

/* 인증번호 보내기 */
export const sendAuthMail = async (
    email,
    setEmail,
    setShowSignup,
    setShowEmailAuth,
    flag,
) => {
    await API.post('/user/sendauthemail', email)
        .then((res) => {
            console.log('email auth', res);
            if (res.status === 200) {
                if (flag === 0) {
                    setEmail(email.email);
                    setShowSignup(false);
                    setShowEmailAuth(true);
                } else {
                    setEmail(email);
                    alert('send');
                }
            } else if (res.status === 403) {
                alert('you already signup');
            }
        })
        .catch((err) => console.log(err.response));
};

/* 인증번호 비교하기 */
export const handleAuthCompare = async (
    email,
    authString,
    setShowEmailAuth,
    setShowLogin,
) => {
    const authData = {
        email: email,
        authString: authString,
    };

    await API.post('/user/compareauthemail', authData)
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                alert('success');
                setShowEmailAuth(false);
                setShowLogin(true);
            } else if (res.status === 401) {
                alert('no match');
            }
        })
        .catch((err) => console.error(err));
};

import { API } from 'utils';

/* 회원가입 */
export const handleSignup = async (
    userData,
    setEmail,
    setShowSignup,
    setShowEmailAuth,
) => {
    await API.post('/user/create', userData)
        .then((response) => {
            if (response.status === 200) {
                const authEmail = { email: userData.email };
                sendAuthMail(
                    authEmail,
                    setEmail,
                    setShowSignup,
                    setShowEmailAuth,
                );
            }
        })
        .catch((error) => console.log(error.response));
};

/* 인증번호 보내기 */
export const sendAuthMail = async (
    email,
    setEmail,
    setShowSignup,
    setShowEmailAuth,
) => {
    await API.post('/user/sendauthemail', email)
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                setEmail(email.email);
                setShowSignup(false);
                setShowEmailAuth(true);
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

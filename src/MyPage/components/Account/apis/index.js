import { API } from 'utils';

// 사용자 정보 가져오기
export const getAuth = async (setUser, setUpdateInfo, setProfilePic) => {
    await API.get('/user/auth', {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [ACCOUNT / GET USER INFO] ✅ SUCCESS', res.data);
            if (res.status === 200) {
                setUser(res.data);
                setUpdateInfo(res.data);
                setProfilePic(res.data.profilePicture);
            }
        })
        .catch((err) =>
            console.log('>>> [ACCOUNT/ GET USER INFO] ❌ ERROR', err.message),
        );
};

// 사용자의 반려견 정보 가져오기
export const getPets = async (setUserPets) => {
    await API.get('/pet/getnames', {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [ACCOUNT / GET USER PETS] ✅ SUCCESS', res);
            setUserPets(res.data.result);
        })
        .catch((err) => {
            console.log('>>> [ACCOUNT / GET USER PETS] ✅ ERROR', err);
        });
};

// 반려견의 사진 가져오기
export const getPetPicture = async (id, setPetPics) => {
    const petID = { petID: id };
    await API.post('/pet/getInfo', petID, {
        withCredentials: true,
    }).then((res) => {
        console.log('>>> [ACCOUNT / GET PET PIC] ✅ SUCCESS');
        setPetPics((old) => [...old, res.data.result.petProfilePicture]);
    });
};

// 이메일 재설정 인증 번호 보내기
export const sendAuthCode = async (email, setIsSend) => {
    await API.post(
        '/user/sendmail/email/update',
        {
            newEmail: email,
        },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log('>>> [UPDATE EMAIL SEND CODE] ✅ SUCCESS');
            setIsSend(true);
        })
        .catch((err) => console.log('>>> [UPDATE EMAIL SEND CODE] ❌ ERRPR'));
};

// 이메일 재설정 인증 번호 확인
export const handleUpdateEmail = async (email, authCode, setIsSend) => {
    await API.post(
        '/user/update/email',
        {
            newEmail: email,
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

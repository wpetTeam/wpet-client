import IMAGE from 'assets/images/Logo/common-character.png';
import { removePicture, uploadPicture } from 'utils';
import { API } from 'utils';

export const ProfileBox = ({
    info,
    originName,
    originPic,
    profilePic,
    setProfilePic,
    updateProfile,
    setUpdateProfile,
    handleUpdateInfo,
}) => {
    const completeProfile = async () => {
        if (info.nickName === '') {
            return;
        }
        if (originName !== info.nickName) {
            console.log('name changed');
            await API.patch(
                '/user/update',
                { nickName: info.nickName },
                {
                    withCredentials: true,
                },
            )
                .then((res) => {
                    console.log('>>> [USER NICKNAME UPDATE] ✅ SUCCESS');
                    setUpdateProfile(false);
                    window.location.reload(false);
                })
                .catch((err) =>
                    console.log('>>> [USER NICKNAME UPDATE] ❌ ERROR', err),
                );
        }
        if (originPic !== profilePic) {
            await API.patch(
                '/user/update',
                { profilePicture: profilePic },
                {
                    withCredentials: true,
                },
            )
                .then((res) => {
                    console.log('>>> [USER PROFILE UPDATE] ✅ SUCCESS');
                    setUpdateProfile(false);
                    window.location.reload(false);
                })
                .catch((err) =>
                    console.log('>>> [USER PROFILE UPDATE] ❌ ERROR', err),
                );
        }
    };

    var inputRef;
    return (
        <div className="profile-box">
            <div className="pic-box">
                <img
                    className={updateProfile ? 'user-pic update' : 'user-pic'}
                    src={profilePic === '' ? IMAGE : profilePic}
                    alt="유저 프로필"
                />
                {updateProfile && (
                    <div className="btn-container">
                        <button
                            className="btn delete"
                            onClick={(e) => removePicture(e, setProfilePic)}
                        >
                            삭제
                        </button>
                        <button
                            className="btn reselect"
                            onClick={() => inputRef.click()}
                        >
                            재선택
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            name="profile_img"
                            onChange={(e) => uploadPicture(e, setProfilePic)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                )}
            </div>
            <div className="name-box">
                <input
                    className={
                        updateProfile ? 'name-input update' : 'name-input'
                    }
                    name="nickName"
                    value={info.nickName || ''}
                    onChange={handleUpdateInfo}
                    disabled={updateProfile ? false : true}
                    placeholder="닉네임"
                />
            </div>
            {updateProfile ? (
                <button onClick={completeProfile} className="update-btn">
                    수정 완료
                </button>
            ) : (
                <button
                    onClick={() => setUpdateProfile(true)}
                    className="update-btn"
                >
                    정보 수정
                </button>
            )}
        </div>
    );
};

import IMAGE from 'assets/images/Logo/common-character.png';
import { removePicture, uploadPicture } from 'utils';
import { API } from 'utils';

export const ProfileBox = ({
    info,
    profilePic,
    setProfilePic,
    updateProfile,
    setUpdateProfile,
    handleUpdateInfo,
}) => {
    const completeProfile = async () => {
        const updateUser = {
            nickName: info.nickName,
            profilePicture: profilePic,
        };
        await API.patch('/user/update', updateUser, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('>>> [USER PROFILE UPDATE] ✅ SUCCESS');
                console.log(updateUser);
                setUpdateProfile(false);
            })
            .catch((err) =>
                console.log('>>> [USER PROFILE UPDATE] ❌ ERROR', err),
            );
        setUpdateProfile(false);
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

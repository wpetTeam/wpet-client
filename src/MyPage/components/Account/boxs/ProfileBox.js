import IMAGE from 'assets/images/Logo/common-character.png';
import { removePicture, uploadPicture } from 'utils';
import { handleUpdateName, handleUpdateProfile } from '../apis';
import { Box } from '../styles/style';

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
            handleUpdateName(info, setUpdateProfile);
        }
        if (originPic !== profilePic) {
            handleUpdateProfile(profilePic, setUpdateProfile);
        }
    };
    var inputRef;
    return (
        <Box className="profile-box row">
            <div className="row-1 picture">
                <img
                    className={updateProfile ? 'pic update' : 'pic'}
                    src={profilePic === '' ? IMAGE : profilePic}
                    alt="유저 프로필"
                />
                {updateProfile && (
                    <div className="btn update">
                        <button
                            className="delete"
                            onClick={(e) => removePicture(e, setProfilePic)}
                        >
                            삭제
                        </button>
                        <button
                            className="reselect"
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
            <div className="row-2 name">
                <input
                    className={updateProfile ? 'input update' : 'input'}
                    name="nickName"
                    value={info.nickName || ''}
                    onChange={handleUpdateInfo}
                    disabled={updateProfile ? false : true}
                    placeholder="닉네임"
                />
            </div>
            <div className="row-3 btn">
                {updateProfile ? (
                    <button onClick={completeProfile}>수정 완료</button>
                ) : (
                    <button onClick={() => setUpdateProfile(true)}>
                        정보 수정
                    </button>
                )}
            </div>
        </Box>
    );
};

import React, { useState, useEffect } from 'react';
import IMAGE from 'assets/images/Logo/text-common-character.png';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { ProfileBox, PwBox, EmailBox, DateBox, PetBox } from './boxs';
import { getAuth, getPets, getPetPicture } from './apis';
import { UpdatePwModal } from './UpdatePwModal';
import './styles/_style.scss';

const MyAccount = () => {
    const [user, setUser] = useState({});
    // userInfo
    const [updateInfo, setUpdateInfo] = useState({});
    const [profilePic, setProfilePic] = useState('');
    const [updateEmail, setUpdateEmail] = useState(false);
    const [updateProfile, setUpdateProfile] = useState(false);
    // PetBox
    const [userPets, setUserPets] = useState([]);
    const [petPics, setPetPics] = useState([]);
    const [showsUpdatePw, setShowsUpdatePw] = useState(false);

    useEffect(() => {
        getAuth(setUser, setUpdateInfo, setProfilePic);
        getPets(setUserPets);
    }, []);

    useEffect(() => {
        if (userPets !== undefined) {
            for (let i = 0; i < userPets.length; i++) {
                getPetPicture(userPets[i]['petID'], setPetPics);
            }
        }
    }, [userPets]);

    const handleUpdateInfo = (e) => {
        setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
    };

    return (
        <Component className="myaccount-component col">
            <div className="col-start">
                <EmailBox
                    info={updateInfo}
                    updateEmail={updateEmail}
                    setUpdateEmail={setUpdateEmail}
                    handleUpdateInfo={handleUpdateInfo}
                />
                <PwBox setShowsUpdatePw={setShowsUpdatePw} />
                <DateBox info={updateInfo} />
            </div>
            <div className="col-center">
                <ProfileBox
                    info={updateInfo}
                    originName={user.nickName}
                    originPic={user.profilePicture}
                    profilePic={profilePic}
                    setProfilePic={setProfilePic}
                    updateProfile={updateProfile}
                    setUpdateProfile={setUpdateProfile}
                    handleUpdateInfo={handleUpdateInfo}
                />
            </div>
            <div className="col-end">
                <PetBox userPets={userPets} petPics={petPics} IMAGE={IMAGE} />
                <div className="community-box">
                    <Icon
                        className="icon no"
                        icon="teenyicons:message-no-access-solid"
                    />
                    커뮤니티에 가입하지 않았습니다.
                </div>
            </div>
            {showsUpdatePw && (
                <UpdatePwModal setShowsUpdatePw={setShowsUpdatePw} />
            )}
        </Component>
    );
};
export default MyAccount;

const Component = styled.div`
    width: 100%;
    height: 93%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

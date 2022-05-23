import React, { useState } from 'react';
import { BsFillPatchPlusFill as DropDownIcon } from 'react-icons/bs';
import { ProfileNav, Text } from 'Home/styles/style';
import { Dropdown } from './Dropdown';
import logo from 'assets/images/Logo/text-icon.png';
import 'Home/styles/_style.scss';

export const UserProfile = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <ProfileNav>
            <img
                className="user-profile-picture"
                src={
                    props.user.profilePicture === ''
                        ? logo
                        : props.user.profilePicture
                }
                alt="사용자 프로필"
            />

            <Text className="user-name-text">
                <span>{props.user.nickName}</span> {'  '}님
            </Text>
            <DropDownIcon
                size={16}
                className={
                    showDropdown
                        ? 'user-profile-info open-dropdown'
                        : 'user-profile-info'
                }
                onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && <Dropdown />}
        </ProfileNav>
    );
};

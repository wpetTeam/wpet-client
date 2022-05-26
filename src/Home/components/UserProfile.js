import React, { useState } from 'react';
import { BsFillPatchPlusFill as DropDownIcon } from 'react-icons/bs';
import { ProfileNav } from 'Home/styles/style';
import { Dropdown } from './Dropdown';
import logo from 'assets/images/Logo/text-icon.png';
import 'Home/styles/_style.scss';

export const UserProfile = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <ProfileNav className="profile-nav">
            <img
                className="user-profile-picture"
                src={
                    props.user.profilePicture === ''
                        ? logo
                        : props.user.profilePicture
                }
                alt="사용자 프로필"
            />
            <p className="user-name-text">
                <span>{props.user.nickName}</span> {'  '}님
            </p>
            <div className="dropdown-container">
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="dropdown-btn"
                    id="touch"
                >
                    <DropDownIcon
                        size={16}
                        className={
                            showDropdown
                                ? 'dropdown-icon open'
                                : 'dropdown-icon'
                        }
                    />
                </button>
                {showDropdown && <Dropdown />}
            </div>
        </ProfileNav>
    );
};

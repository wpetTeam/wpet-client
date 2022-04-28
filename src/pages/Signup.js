import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import { Input, Button } from 'components/Login';
import {
    checkPw,
    checkEmail,
    checkName,
    onKeyPress,
    uploadPicture,
    removePicture,
} from 'utils';
import { FaPaw } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import 'assets/styles/Login/_style.scss';
import {
    Eclipse,
    SignupFrame,
    Text,
    SignupContainer,
    Content,
    Picture,
    Profile,
    Info,
    BoldText,
} from 'assets/styles/Login/style';

const Signup = (props) => {
    const [profile, setProfile] = useState('');

    const [info, setInfo] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChange(e) {
        const value = e.target.value;
        setInfo({
            ...info,
            [e.target.name]: value,
        });
    }

    function handleButton() {
        let isError = false;

        if (checkName(info.name) === false) isError = true;
        if (checkEmail(info.email) === false) isError = true;
        if (checkPw(info.password) === false) isError = true;

        setErrorMessage({
            name: checkName(info.name) ? '' : '이름의 글자수를 확인해주세요.',
            email: checkEmail(info.email)
                ? ''
                : '올바른 이메일 형식이 아닙니다.',
            password: checkPw(info.password)
                ? ''
                : '알파벳, 숫자를 포함한 8~13자로 생성해주세요.',
        });

        if (isError === false) {
            props.setShowSignup(false);
            props.setIsSignupCompleted(true);
        }
    }

    var inputRef;

    return (
        <ThemeProvider theme={theme}>
            <SignupContainer>
                <Eclipse>
                    <img src={LogoImage} width={50} height={50} alt="로고" />
                </Eclipse>
                <SignupFrame className="signup">
                    <IoIosClose
                        className="close-icon"
                        onClick={() => {
                            props.setShowSignup(false);
                            props.setBlur(false);
                        }}
                    />
                    <BoldText className="welcome-text">
                        Welcome to <span>wpet !</span>
                    </BoldText>
                    <Text className="sub-text">
                        반갑습니다. 반려견의 일상을 특별하게 기록해보세요.
                    </Text>
                    <Content>
                        <Profile>
                            {profile === '' && (
                                <>
                                    <Picture>
                                        <FaPaw
                                            size={70}
                                            className="profile-upload-icon"
                                            onClick={() => inputRef.click()}
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name="profile_img"
                                            onChange={(e) =>
                                                uploadPicture(e, setProfile)
                                            }
                                            ref={(refParam) =>
                                                (inputRef = refParam)
                                            }
                                            hidden={true}
                                        />
                                    </Picture>
                                    <Text className="profile-text">
                                        [선택] 발바닥을 클릭해, <br /> 프로필
                                        사진을 업로드해주세요.
                                    </Text>
                                </>
                            )}
                            {profile !== '' && (
                                <>
                                    <img
                                        src={profile}
                                        alt="프로필 사진"
                                        className="profile-picture"
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <button
                                            className="profile-button"
                                            onClick={(e) =>
                                                removePicture(e, setProfile)
                                            }
                                        >
                                            삭제하기
                                        </button>
                                        <button
                                            className="profile-button"
                                            onClick={() => inputRef.click()}
                                        >
                                            다시 선택하기
                                        </button>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            name="profile_img"
                                            onChange={(e) =>
                                                uploadPicture(e, setProfile)
                                            }
                                            ref={(refParam) =>
                                                (inputRef = refParam)
                                            }
                                            hidden={true}
                                        />
                                    </div>
                                </>
                            )}
                        </Profile>
                        <Info>
                            <Input
                                name="name"
                                value={info.name}
                                onChange={handleChange}
                                placeholder="닉네임 (1~15자)"
                                marginBottom="4%"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                            />
                            <Text className="alert-text">
                                {errorMessage.name}
                            </Text>
                            <Input
                                name="email"
                                value={info.email}
                                onChange={handleChange}
                                placeholder="이메일"
                                marginBottom="4%"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                            />
                            <Text className="alert-text">
                                {errorMessage.email}
                            </Text>
                            <Input
                                password
                                name="password"
                                value={info.password}
                                onChange={handleChange}
                                placeholder="비밀번호 (알파벳, 숫자를 포함한 8~13자)"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                                marginBottom="4%"
                            />
                            <Text className="alert-text">
                                {errorMessage.password}
                            </Text>
                            <Input
                                password
                                name="passwordConfirm"
                                value={info.passwordConfirm}
                                onChange={handleChange}
                                placeholder="비밀번호 확인"
                                marginBottom="4%"
                                onKeyPress={(e) => onKeyPress(e, handleButton)}
                            />
                            {info.passwordConfirm !== '' &&
                                info.password !== info.passwordConfirm && (
                                    <Text className="alert-text">
                                        비밀번호가 일치하지 않습니다.
                                    </Text>
                                )}
                            <Button
                                name="submit"
                                text="Complete!"
                                marginTop="6%"
                                onClick={handleButton}
                            />
                        </Info>
                    </Content>
                </SignupFrame>
            </SignupContainer>
        </ThemeProvider>
    );
};
export default Signup;

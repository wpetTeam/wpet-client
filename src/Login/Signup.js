import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import { Input, Button, ProfilePicture } from 'Login/components';
import { checkEmail, checkName, checkPw, onKeyPress } from 'utils';
import { IoIosClose } from 'react-icons/io';
import 'Login/styles/_style.scss';
import {
    Eclipse,
    SignupFrame,
    Text,
    SignupContainer,
    Content,
    Profile,
    Info,
    BoldText,
} from 'Login/styles/style.js';

function checkInput(name, email, password, setErrorMessage) {
    let isError = false;
    if (checkName(name) === false) isError = true;
    if (checkEmail(email) === false) isError = true;
    if (checkPw(password) === false) isError = true;

    setErrorMessage({
        name: checkName(name) ? '' : '이름의 글자수를 확인해주세요.',
        email: checkEmail(email) ? '' : '올바른 이메일 형식이 아닙니다.',
        password: checkPw(password)
            ? ''
            : '알파벳, 숫자를 포함한 8~13자로 생성해주세요.',
    });
    return isError;
}

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

    const handleButton = async () => {
        var isError = checkInput(
            info.name,
            info.email,
            info.password,
            setErrorMessage,
        );

        if (isError) return;

        const result = await fetch('http://localhost:3000/api/user/create', {
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                email: info.email,
                pw: info.password,
                nickName: info.name,
                profilePicture: profile,
            }),
        });

        if (result.status === 200) {
            /* 인증번호 발송 -> signup modal 이 열리게 */
            props.setShowSignup(false);
            props.setIsSignupCompleted(true);
        } else if (result.status === 403) {
            /* 이미 계정이 존재하는 사용자 -> 인증 페이지만 띄어주기 */
        } else if (result.status === 409) {
            /* 중복 검사에서 걸린 경우 - 메세지 확인 (닉네임 중복, 이메일 중복, 이메일 + 닉네임 중복) -> 다시 회원가입하라고 */
        }
    };

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
                            <ProfilePicture
                                type="signup"
                                profile={profile}
                                setProfile={setProfile}
                                size="200px"
                            />
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

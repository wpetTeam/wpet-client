import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { theme } from 'assets/styles/theme';
import LogoImage from 'assets/images/Logo/text-icon.png';
import {
    NameInput,
    EmailInput,
    PwInput,
    PwConfirmationInput,
} from './components/functions';
import { Button } from 'Login/components';
import {
    ProfilePicture,
    ConflictModal,
    EmailAuthModal,
} from 'Signup/components';
import { onKeyPress } from 'utils';
import { CheckPwDetail, checkUserInfo } from 'Signup/utils/signupCheck';
import { handleSignup } from './apis';
import { Eclipse, Text, BoldText } from 'assets/styles/common/loginSignup';
import {
    Container,
    Frame,
    Content,
    Profile,
    Info,
} from 'Signup/styles/style.js';
import 'Signup/styles/_style.scss';

const Page = (props) => {
    const [profile, setProfile] = useState('');
    const [info, setInfo] = useState({
        nickName: '',
        email: '',
        pw: '',
        passwordConfirm: '',
    });
    const [errMessage, setErrMessage] = useState({
        name: '',
        email: '',
        pw: '',
    });
    const [pwErrorCheck, setPwErrorCheck] = useState({
        number: false,
        symbol: false,
        length: false,
    });
    /* 충돌 관련 모달 */
    const [showsConflict, setShowsConflict] = useState(false);
    const [conflictMsg, setConflictMsg] = useState('');
    /* 이메일 인증번호 전송 모달 */
    const [showsAuth, setShowsAuth] = useState(false);
    /* 403번 에러(가입0,인증X) */
    const [needsAuth, setNeedsAuth] = useState(false);
    /* 인증번호 매치 확인 */
    const [isMatchCode, setIsMatchCode] = useState(false);

    // 회원가입 Input Onchange
    function handleChange(e) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
        // 비밀번호 순차 검사
        if (e.target.name === 'pw') {
            setPwErrorCheck({
                ...pwErrorCheck,
                number: CheckPwDetail(e.target.value, 0),
                symbol: CheckPwDetail(e.target.value, 1),
                length: CheckPwDetail(e.target.value, 2),
            });
        }
        setErrMessage({
            ...errMessage,
            name: '',
            email: '',
            pw: '',
        });
    }

    useEffect(() => {}, [showsAuth]);
    // 인증번호 받기 버튼 클릭
    const handleButton = async () => {
        // 에러나면, 안 보냄
        if (checkUserInfo(info.nickName, info.email, info.pw, setErrMessage))
            return;
        const userData = {
            nickName: info.nickName,
            email: info.email,
            pw: info.pw,
            profilePicture: profile,
            location: '',
        };
        // 데이터 POST
        handleSignup(
            userData,
            props.setEmail,
            props.setShowSignup,
            setShowsAuth,
            setShowsConflict,
            setConflictMsg,
            setNeedsAuth,
        );
    };
    return (
        <ThemeProvider theme={theme}>
            <div className="component-container">
                {!showsAuth && (
                    <Container className="signup-container">
                        <Eclipse
                            background={showsConflict ? '#f3c5b620' : ''}
                            visibility={showsAuth ? 'hidden' : 'visible'}
                        >
                            <img
                                src={LogoImage}
                                width={50}
                                height={50}
                                alt="로고"
                            />
                        </Eclipse>
                        <Frame
                            className="signup"
                            background={showsConflict ? '#f3c5b620' : ''}
                            visibility={showsAuth ? 'hidden' : 'visible'}
                        >
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
                                반갑습니다. 반려견의 일상을 특별하게
                                기록해보세요.
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
                                    <NameInput
                                        info={info}
                                        errMessage={errMessage}
                                        handleChange={handleChange}
                                        onKeyPress={onKeyPress}
                                        handleButton={handleButton}
                                    />
                                    <EmailInput
                                        info={info}
                                        errMessage={errMessage}
                                        handleChange={handleChange}
                                        onKeyPress={onKeyPress}
                                        handleButton={handleButton}
                                    />
                                    <PwInput
                                        info={info}
                                        errMessage={errMessage}
                                        pwErrorCheck={pwErrorCheck}
                                        handleChange={handleChange}
                                        onKeyPress={onKeyPress}
                                        handleButton={handleButton}
                                    />
                                    <PwConfirmationInput
                                        info={info}
                                        handleChange={handleChange}
                                        onKeyPress={onKeyPress}
                                        handleButton={handleButton}
                                    />
                                    <Button
                                        name="submit"
                                        text="본인 인증"
                                        marginTop="6%"
                                        onClick={handleButton}
                                    />
                                </Info>
                            </Content>
                        </Frame>
                        {showsConflict && (
                            <ConflictModal
                                setShowsConflict={setShowsConflict}
                                conflictMsg={conflictMsg}
                            />
                        )}
                    </Container>
                )}
                {showsAuth && (
                    <EmailAuthModal
                        setBlur={props.setBlur}
                        setShowSignup={props.setShowSignup}
                        setShowLogin={props.setShowLogin}
                        setShowsAuth={setShowsAuth}
                        setIsMatchCode={setIsMatchCode}
                        email={info.email}
                        isMatchCode={isMatchCode}
                        needsAuth={needsAuth}
                    />
                )}
            </div>
        </ThemeProvider>
    );
};
export default Page;

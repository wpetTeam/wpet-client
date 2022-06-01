import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import character from 'assets/images/Logo/findpw-character.png';
import { Button, Input } from 'Login/components';
import { Eclipse, Text } from 'assets/styles/common/loginSignup';
import { FindPwContainer, FindPwFrame } from 'Login/styles/style';
import { API, onKeyPress } from 'utils';
import 'Login/styles/_style.scss';

const FindPassword = (props) => {
    const [email, setEmail] = useState('');

    const handleButton = async () => {
        await API.post(
            '/user/find/pw',
            { email: email },
            {
                withCredentials: true,
            },
        )
            .then((res) => {
                console.log('>>> [SENDPW] ✅ SUCCESS');
                props.setShowFindPw(false);
                props.setShowLogin(true);
            })
            .catch((err) => console.log('>>> [SENDPW] ❌ ERROR', err.message));
    };

    return (
        <FindPwContainer className="findpw-modal">
            <Eclipse>
                <IoIosClose
                    className="close-icon"
                    size={30}
                    style={{ padding: '10px' }}
                    onClick={() => {
                        props.setShowFindPw(false);
                        props.setBlur(false);
                    }}
                />
            </Eclipse>
            <FindPwFrame>
                <div className="header">
                    <img
                        src={character}
                        alt="이미지"
                        width={100}
                        height={100}
                    />
                    <Text className="header-text">
                        비밀번호를 잊어버렸나요?
                    </Text>
                </div>
                <div className="main">
                    <Text className="desc-text">
                        가입하신 이메일로 임시 비밀번호를 발급해드립니다.
                    </Text>
                    <Input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일"
                        onKeyPress={(e) => onKeyPress(e, handleButton)}
                    />
                </div>
                <div className="footer">
                    <Button text="확인" onClick={handleButton} />
                </div>
            </FindPwFrame>
        </FindPwContainer>
    );
};
export default FindPassword;

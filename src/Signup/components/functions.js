import { Input } from 'Login/components';
import { Text } from 'assets/styles/common/loginSignup';
import { Icon } from '@iconify/react';

export function NameInput({
    info,
    errMessage,
    handleChange,
    onKeyPress,
    handleButton,
}) {
    return (
        <>
            <Input
                name="nickName"
                value={info.nickName}
                onChange={handleChange}
                placeholder="닉네임 (1~15자)"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
                isError={errMessage.name !== '' ? true : false}
            />
            <Text className="alert-text">{errMessage.name}</Text>
        </>
    );
}
export function EmailInput({
    info,
    errMessage,
    handleChange,
    onKeyPress,
    handleButton,
}) {
    return (
        <>
            <Input
                name="email"
                value={info.email}
                onChange={handleChange}
                placeholder="이메일"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
                isError={errMessage.email !== '' ? true : false}
            />
            <Text className="alert-text">{errMessage.email}</Text>
        </>
    );
}
export function PwInput({
    info,
    pwErrorCheck,
    errMessage,
    handleChange,
    onKeyPress,
    handleButton,
}) {
    return (
        <>
            <Input
                password
                name="pw"
                value={info.pw}
                onChange={handleChange}
                placeholder="비밀번호 (알파벳,숫자,특수문자를 포함한 8~13자)"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
                isError={errMessage.pw !== '' ? true : false}
            />
            {info.pw.length !== 0 && (
                <div className="pw-check-component">
                    <div
                        className={
                            pwErrorCheck.number ? 'pw-check done ' : 'pw-check'
                        }
                    >
                        <Icon icon="bi:check-all" />
                        <p className="text">숫자</p>
                    </div>
                    <div
                        className={
                            pwErrorCheck.symbol ? 'pw-check done ' : 'pw-check'
                        }
                    >
                        <Icon icon="bi:check-all" />
                        <p className="text">특수문자</p>
                    </div>
                    <div
                        className={
                            pwErrorCheck.length ? 'pw-check done ' : 'pw-check'
                        }
                    >
                        <Icon icon="bi:check-all" />
                        <p className="text">길이</p>
                    </div>
                </div>
            )}
        </>
    );
}
export function PwConfirmationInput({
    info,
    handleChange,
    e,
    onKeyPress,
    handleButton,
}) {
    return (
        <>
            <Input
                password
                name="passwordConfirm"
                value={info.passwordConfirm}
                onChange={handleChange}
                placeholder="비밀번호 확인"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
            />
            {info.passwordConfirm !== '' &&
                info.pw !== info.passwordConfirm && (
                    <Text className="alert-text">
                        비밀번호가 일치하지 않습니다.
                    </Text>
                )}
        </>
    );
}

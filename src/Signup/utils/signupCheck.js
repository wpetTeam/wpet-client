/* 회원가입 검사 */

/* 이름 : 1~15자  + 중복체크*/
function checkName(name) {
    var regExp = /^.{1,15}$/;
    return regExp.test(name);
}

/* 비밀번호 : 알파벳, 숫자를 포함한 8~13자*/
function checkPw(pw) {
    var regExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,13}$/;
    return regExp.test(pw);
}

/* 비밀번호 세부 검사 : 알파벳, 숫자를 포함한 8~13자*/
export function CheckPwDetail(pw, step) {
    var re = {
        digit: /[0-9]/,
        symbol: /[!@#$%^&]/,
    };
    if (step === 0) {
        return re.digit.test(pw);
    } else if (step === 1) {
        return re.symbol.test(pw);
    } else {
        if (pw.length >= 8 && pw.length <= 13) return true;
        else return false;
    }
}

/* 이메일 : _@_._ + 중복체크(서버) */
function checkEmail(email) {
    var regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regExp.test(email);
}

export function checkUserInfo(name, email, pw, setErrorMessage) {
    let isError = false;
    if (checkName(name) === false) isError = true;
    if (checkEmail(email) === false) isError = true;
    if (checkPw(pw) === false) isError = true;

    setErrorMessage({
        name: checkName(name) ? '' : '글자수를 확인해주세요.',
        email: checkEmail(email) ? '' : '올바른 이메일 형식이 아닙니다.',
        pw: checkPw(pw) ? '' : '잘못됨',
    });
    return isError;
}

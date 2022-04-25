/* 비밀번호, 이름, 이메일 검사 */

/* 이름 : 1~15자  + 중복체크*/
export function checkName(name) {
    var regExp = /^.{1,15}$/;
    return regExp.test(name);
}

/* 비밀번호 : 알파벳, 숫자를 포함한 8~13자*/
export function checkPw(pw) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,13}$/;
    return regExp.test(pw);
}

/* 이메일 : _@_._ + 중복체크*/
export function checkEmail(email) {
    var regExp =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regExp.test(email);
}

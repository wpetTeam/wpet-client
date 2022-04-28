/* 엔터 입력 시, 버튼 제출 기능 */
export default function onKeyPress(e, func) {
    if (e.key === 'Enter') {
        func();
    }
}

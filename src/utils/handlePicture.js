/* 파일 업로드 */
export function uploadPicture(e, setPicture) {
    if (e.target.files[0]) {
        setPicture(e.target.files[0]);
    } else {
        setPicture('');
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        if (reader.readyState === 2) {
            setPicture(reader.result);
        }
    };
    reader.readAsDataURL(e.target.files[0]);
}

/* 파일 삭제 */
export function removePicture(e, setPicture) {
    setPicture('');
}

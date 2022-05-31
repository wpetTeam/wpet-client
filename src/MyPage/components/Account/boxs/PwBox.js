import { Icon } from '@iconify/react';

export const PwBox = ({ setShowsUpdatePw }) => {
    return (
        <div className="pw-box">
            <Icon className="icon" icon="teenyicons:password-solid" />
            <p>비밀번호 변경을 원하시나요?</p>
            <div className="btn-box">
                <button
                    className="update-btn update"
                    onClick={() => setShowsUpdatePw(true)}
                >
                    네, 변경하고 싶습니다.
                </button>
            </div>
        </div>
    );
};

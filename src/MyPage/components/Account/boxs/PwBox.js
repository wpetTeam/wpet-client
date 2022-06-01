import { Icon } from '@iconify/react';
import { Box } from '../styles/style';

export const PwBox = ({ setShowsUpdatePw }) => {
    return (
        <Box className="pw-box row">
            <Icon className="row-1" icon="teenyicons:password-solid" />
            <p className="row-2">비밀번호 변경을 원하시나요?</p>
            <button
                className="row-3 btn"
                onClick={() => setShowsUpdatePw(true)}
            >
                네, 변경하고 싶습니다.
            </button>
        </Box>
    );
};

import { Icon } from '@iconify/react';

export const DateBox = ({ info }) => {
    return (
        <div className="date-box">
            <Icon icon="uil:calender" className="icon" />
            <p className="text">
                {info.joinDate} 부터 wpet과 함께하고 있습니다.
            </p>
            <p className="text delete"> 탈퇴하고 싶어요</p>
        </div>
    );
};

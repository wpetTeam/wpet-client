import { Icon } from '@iconify/react';

export const DateBox = ({ info }) => {
    return (
        <div className="date-box">
            <Icon icon="uil:calender" className="icon" />
            <p>{info.joinDate} 에 가입하였습니다.</p>
        </div>
    );
};

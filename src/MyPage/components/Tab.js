import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'MyPage/styles/_style.scss';
import { Link } from 'react-router-dom';

export const Tab = (props) => {
    useEffect(() => {}, [props.tab]);
    return (
        <>
            <Link to="">
                <Icon
                    icon="ri:calendar-todo-fill"
                    className={
                        props.tab === 0 ? 'mypage-nav select' : 'mypage-nav'
                    }
                    onClick={() => props.setTab(0)}
                />
            </Link>
            <Link to="account">
                <Icon
                    icon="material-symbols:account-circle"
                    className={
                        props.tab === 1 ? 'mypage-nav select' : 'mypage-nav'
                    }
                    onClick={() => props.setTab(1)}
                />
            </Link>
        </>
    );
};

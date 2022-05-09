import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'Community/styles/_style.scss';
import { Link } from 'react-router-dom';

export const Tab = (props) => {
    useEffect(() => {}, [props.tab]);
    return (
        <>
            <Link to="">
                <Icon
                    icon="typcn:info-large"
                    className={
                        props.tab === 0
                            ? 'community-nav select'
                            : 'community-nav'
                    }
                    onClick={() => props.setTab(0)}
                />
            </Link>
            <Link to="counseling">
                <Icon
                    icon="carbon:chat-bot"
                    className={
                        props.tab === 1
                            ? 'community-nav select'
                            : 'community-nav'
                    }
                    onClick={() => props.setTab(1)}
                />
            </Link>
        </>
    );
};

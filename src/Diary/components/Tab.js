import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'Diary/styles/_style.scss';
import { Link } from 'react-router-dom';

export const Tab = (props) => {
    useEffect(() => {}, [props.tab]);
    return (
        <>
            <Link to="">
                <Icon
                    icon="bx:book-heart"
                    className={
                        props.tab === 0 ? 'diary-nav select' : 'diary-nav'
                    }
                    onClick={() => props.setTab(0)}
                />
            </Link>
            <Link to="write">
                <Icon
                    icon="iconoir:design-pencil"
                    className={
                        props.tab === 1 ? 'diary-nav select' : 'diary-nav'
                    }
                    onClick={() => props.setTab(1)}
                />
            </Link>
        </>
    );
};

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'assets/styles/DogInfo/_style.scss';

export const Tab = (props) => {
    useEffect(() => {}, [props.tab]);
    return (
        <>
            <Icon
                icon="cil:dog"
                className={
                    props.tab === 0 ? 'dog-info-nav select' : 'dog-info-nav'
                }
                onClick={() => props.setTab(0)}
            />
            <Icon
                icon="fa-solid:plus"
                className={
                    props.tab === 1 ? 'dog-info-nav select' : 'dog-info-nav'
                }
                onClick={() => props.setTab(1)}
            />
        </>
    );
};

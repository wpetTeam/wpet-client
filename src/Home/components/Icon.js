import React from 'react';
import styled from 'styled-components';

import { HiOutlineBookOpen as Diary } from 'react-icons/hi';
import { FaDog as DogInfo } from 'react-icons/fa';
import { GiDogHouse as Community } from 'react-icons/gi';
import { RiSettings3Fill as Settings } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Icon = (props) => {
    const IconList = [
        { id: 1, name: 'diary', icon: <Diary size={23} />, text: '다이어리' },
        {
            id: 2,
            name: 'pet-info',
            icon: <DogInfo size={23} />,
            text: '나의 반려견',
        },
        {
            id: 3,
            name: 'community',
            icon: <Community size={23} />,
            text: '커뮤니티',
        },
        { id: 4, name: 'settings', icon: <Settings size={23} />, text: '설정' },
    ];
    return (
        <>
            {IconList.map((item, idx) =>
                IconList[idx]['name'] === props.name ? (
                    <Link
                        to={'/' + props.name}
                        style={{ textDecoration: 'none' }}
                        key={IconList[idx]['id']}
                    >
                        <Container
                            className={
                                props.isSelect
                                    ? 'select'
                                    : props.isShow
                                    ? 'show'
                                    : 'none'
                            }
                        >
                            <Image className={props.isSelect ? 'select' : ''}>
                                {IconList[idx]['icon']}
                            </Image>
                            <Text>{IconList[idx]['text']}</Text>
                            {props.isSelect && <SelectBar></SelectBar>}
                        </Container>
                    </Link>
                ) : (
                    ''
                ),
            )}
        </>
    );
};

const Container = styled.div`
    width: 100px;
    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.show {
        color: ${({ theme }) => theme.dashboardIcon};
    }
    &.show:hover {
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
        cursor: pointer;
        color: ${({ theme }) => theme.aboutLogoText};
    }
    &.select {
        transform: scale(1.05);
        color: ${({ theme }) => theme.aboutLogoText};
        border: transprent;
        font-weight: bold;
    }
    &.none {
        color: transparent;
    }
    &.none:hover {
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
        cursor: pointer;
        color: ${({ theme }) => theme.dashboardIcon};
    }
`;

const Image = styled.div`
    margin-bottom: -10%;
    color: ${({ theme }) => theme.dashboardIcon};

    &.select {
        color: ${({ theme }) => theme.aboutLogoText};
    }
`;

const Text = styled.p`
    font-size: 0.7em;
    font-weight: 600;
`;

const SelectBar = styled.div`
    width: 50px;
    height: 3px;
    margin-top: -5px;

    background: ${({ theme }) => theme.aboutLogoText};
`;

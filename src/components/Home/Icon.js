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
            name: 'dog-info',
            icon: <DogInfo size={23} />,
            text: '반려견 건강 정보',
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
                        <Container>
                            <Image>{IconList[idx]['icon']}</Image>
                            <Text>{IconList[idx]['text']}</Text>
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

    color: ${({ theme }) => theme.dashboardIcon};

    &:hover {
        transform: scale(1.05);
        transition: 0.3s ease-in-out;
        cursor: pointer;
        color: ${({ theme }) => theme.aboutLogoText};
    }
`;

const Image = styled.div`
    margin-bottom: -10%;
`;

const Text = styled.p`
    font-size: 0.7em;
    font-weight: 600;
`;

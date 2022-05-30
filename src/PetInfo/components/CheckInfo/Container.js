import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import RegisterInfo from './RegisterInfo';
import { Container } from 'PetInfo/components/CheckInfo/styles/style';
import './styles/_style.scss';
import { API } from 'utils';
import { Icon } from '@iconify/react';
import IMAGE from 'assets/images/Logo/heart-character.jpeg';

export const CheckInfo = (props) => {
    const [userPets, setUserPets] = useState([]);

    useEffect(() => {
        const getUserPets = async () => {
            await API.get('/pet/getnames', {
                withCredentials: true,
            }).then((res) => {
                console.log('>>> [GET USER PETS] ✅ SUCCESS');
                setUserPets(res.data.result);
            });
        };
        getUserPets();
    }, []);

    return (
        <Container className="pet-check">
            <div className="section-1">
                {userPets.length === 0 ? (
                    <div className="no-pet-text">
                        <img src={IMAGE} alt="emoji" width={80} />
                        <p>등록된 반려견이 없어요! </p>
                        <p>
                            왼쪽의{' '}
                            <Icon icon="fa-solid:plus" className="plus-icon" />{' '}
                            버튼을 눌러 반려견을 등록해주세요.
                        </p>
                    </div>
                ) : (
                    userPets.map((item) => (
                        <RegisterInfo
                            key={uuid()}
                            petId={item.petID}
                            breeds={props.breeds}
                        />
                    ))
                )}
            </div>
        </Container>
    );
};

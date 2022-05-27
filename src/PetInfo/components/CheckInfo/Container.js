import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import RegisterInfo from './RegisterInfo';
import { Container } from 'PetInfo/components/CheckInfo/styles/style';
import './styles/_style.scss';
import { API } from 'utils';

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
                {userPets.map((item) => (
                    <RegisterInfo
                        key={uuid()}
                        petId={item.petID}
                        breeds={props.breeds}
                    />
                ))}
            </div>
        </Container>
    );
};

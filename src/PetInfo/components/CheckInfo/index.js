import React from 'react';
import { Container } from 'PetInfo/components/CheckInfo/styles/style';
import { PetInfo } from './test';
import './styles/_style.scss';
import RegisterInfo from './RegisterInfo';

export const CheckInfo = () => {
    /* 강아지 정보를 받아서 뿌리기 */
    return (
        <Container className="pet-check">
            <div className="section-1">
                <RegisterInfo petInfo={PetInfo} />
            </div>
        </Container>
    );
};

import { Eclipse } from 'assets/styles/common/loginSignup';
import React from 'react';
import styled from 'styled-components';
import Character from 'assets/images/Logo/conflict-img.png';

export const ConflictModal = (props) => {
    const closeModal = () => {
        props.setShowsConflict(false);
    };

    return (
        <Component className="conflict-modal">
            <Eclipse className="eclipse">
                <img src={Character} alt="캐릭터" width={40} />
            </Eclipse>
            <div className="frame">
                <p className="text">
                    중복되는 <span>{props.conflictMsg}</span>입니다. <br />
                    다시 입력해주세요.
                </p>
                <button className="btn" onClick={closeModal}>
                    확인
                </button>
            </div>
        </Component>
    );
};

const Component = styled.div`
    position: fixed;

    width: 330px;
    height: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 200;
`;

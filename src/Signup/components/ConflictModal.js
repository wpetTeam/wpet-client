import React from 'react';
import styled from 'styled-components';
import Character from 'assets/images/Logo/conflict-img.png';

export const ConflictModal = (props) => {
    const closeModal = () => {
        props.setShowsConflict(false);
    };

    return (
        <Component className="conflict-modal">
            <div className="frame">
                <img src={Character} alt="캐릭터" width={80} />
                <p className="text">
                    중복된 <span>{props.conflictMsg}</span>이 감지되었습니다.{' '}
                    <br />
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

    width: 500px;
    height: 440px;

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 200;
`;

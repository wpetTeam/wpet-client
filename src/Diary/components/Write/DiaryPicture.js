import React from 'react';
import { uploadPicture, removePicture } from 'utils';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const DiaryPicture = (props) => {
    var inputRef;

    return (
        <React.Fragment>
            {props.picture === '' ? (
                <Frame
                    className="pic-select-yet-component"
                    background={props.backgroundColor}
                >
                    <Select>
                        <Icon
                            icon="gridicons:cloud-upload"
                            className="pic-upload-icon"
                            name="upload-btn"
                            onClick={() => inputRef.click()}
                        />
                        <p className="pic-upload-text" htmlFor="upload-btn">
                            특별한 오늘을 기록한 사진이 있나요?
                            <br />위 버튼을 눌러 업로드해주세요!{' '}
                        </p>
                        <input
                            type="file"
                            accept="image/*"
                            name="picture_img"
                            onChange={(e) => uploadPicture(e, props.setPicture)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </Select>
                </Frame>
            ) : (
                <div className="pic-select-component">
                    <Frame
                        className="select-pic"
                        background={props.backgroundColor}
                    >
                        <Image src={props.picture} alt="프로필 사진" />
                    </Frame>
                    <div className="select-btn">
                        <button
                            className="pic-btn delete"
                            onClick={(e) => removePicture(e, props.setPicture)}
                        >
                            삭제하기
                        </button>
                        <button
                            className="pic-btn reselect"
                            onClick={() => inputRef.click()}
                        >
                            다시 선택하기
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            name="picture_img"
                            onChange={(e) => uploadPicture(e, props.setPicture)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
const Frame = styled.div.attrs((props) => ({
    background: props.background,
}))`
    border: 6px solid ${(props) => props.background};
    box-shadow: 8px 8px 0px 0px ${(props) => props.background}80;
`;
const Select = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #bdbdbd20;
    border-radius: 4px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

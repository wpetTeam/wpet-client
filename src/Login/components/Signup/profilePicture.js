import React from 'react';
import { uploadPicture, removePicture } from 'utils';
import { FaPaw } from 'react-icons/fa';
import styled from 'styled-components';
import 'Login/styles/_style.scss';

export const ProfilePicture = (props) => {
    var inputRef;
    return (
        <>
            {props.profile === '' && (
                <Container>
                    <Select size={props.size}>
                        <FaPaw
                            size={70}
                            className="profile-upload-icon"
                            onClick={() => inputRef.click()}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            name="profile_img"
                            onChange={(e) => uploadPicture(e, props.setProfile)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </Select>
                    {props.type === 'signup' && (
                        <Text>
                            <span>(선택)</span> 발바닥을 클릭해, <br /> 프로필
                            사진을 업로드해주세요.
                        </Text>
                    )}
                </Container>
            )}
            {props.profile !== '' && (
                <>
                    <Image
                        src={props.profile}
                        alt="프로필 사진"
                        size={props.size}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Button
                            onClick={(e) => removePicture(e, props.setProfile)}
                        >
                            삭제하기
                        </Button>
                        <Button onClick={() => inputRef.click()}>
                            다시 선택하기
                        </Button>
                        <input
                            type="file"
                            accept="image/*"
                            name="profile_img"
                            onChange={(e) => uploadPicture(e, props.setProfile)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                </>
            )}
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`;
const Select = styled.div.attrs((props) => ({
    size: props.size,
}))`
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    margin-bottom: 5%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #bdbdbd30;
    border-radius: 4px;
`;
const Text = styled.p`
    font-size: 0.8em;
    text-align: center;
    color: #686868;

    & span {
        font-weight: 500;
        color: ${({ theme }) => theme.aboutLogoText};
    }
`;
const Image = styled.img.attrs((props) => ({
    size: props.size,
}))`
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    margin-bottom: 10%;
`;

const Button = styled.button`
    width: 100px;
    height: 30px;

    font-family: Pretendard Medium;

    background: transparent;
    border: 1px solid #68686880;
    border-radius: 4px;

    margin-left: 2%;
    margin-right: 2%;

    color: #686868;

    &:hover {
        transform: scale(1.01);
        transition: 0.2s ease-in;
        cursor: pointer;

        color: ${({ theme }) => theme.aboutLogoText};
        border: 1.5px solid ${({ theme }) => theme.aboutLogoText};
        font-family: Pretendard SemiBold;
    }
`;

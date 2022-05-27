import React from 'react';
import uuid from 'react-uuid';
import { handleBreedPicker, breedNameHandler } from './handlePicker';
import { PickerContainer, Select, ImageDiv, TextDiv } from './styles/style';
import './styles/_style.scss';

const BreedPicker = (props) => {
    return (
        <PickerContainer>
            {props.breeds.map(
                (item, idx) =>
                    idx <= 26 && (
                        <Select
                            key={uuid()}
                            onClick={() =>
                                handleBreedPicker(
                                    item,
                                    props.selectBreed,
                                    props.setSelectBreed,
                                )
                            }
                            className={
                                props.selectBreed.includes(item)
                                    ? 'breed-option select'
                                    : 'breed-option'
                            }
                        >
                            <ImageDiv>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/Breed/${props.breeds[idx]}.png`
                                    }
                                    width={45}
                                    height={50}
                                    alt="반려견 종"
                                />
                            </ImageDiv>
                            <TextDiv>{breedNameHandler(item)}</TextDiv>
                        </Select>
                    ),
            )}
        </PickerContainer>
    );
};
export default BreedPicker;

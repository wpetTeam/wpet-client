import React from 'react';
import { PickerContainer, Select, ImageDiv, TextDiv } from './style';
import { Breed } from './breed.const';
import { handleBreedPicker, breedNameHandler } from './handlePicker';
import './_style.scss';

const BreedPicker = (props) => {
    return (
        <PickerContainer>
            {Breed.map(
                (item, idx) =>
                    idx <= 26 && (
                        <Select
                            key={item.id}
                            onClick={() =>
                                handleBreedPicker(
                                    item.name,
                                    props.breed,
                                    props.setBreed,
                                )
                            }
                            className={
                                props.breed.includes(item.name)
                                    ? 'breed-option select'
                                    : 'breed-option'
                            }
                        >
                            <ImageDiv>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/Breed/${Breed[idx]['name']}.png`
                                    }
                                    width={45}
                                    height={50}
                                    alt="반려견 종"
                                />
                            </ImageDiv>
                            <TextDiv>{breedNameHandler(item.name)}</TextDiv>
                        </Select>
                    ),
            )}
        </PickerContainer>
    );
};
export default BreedPicker;

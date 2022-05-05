import React from 'react';
import styled from 'styled-components';
import { Breed } from './breed.const';
import './_style.scss';

const BreedPicker = (props) => {
    const handleBreedPicker = (idx) => {
        var breed_name = Breed[idx]['name'];
        if (props.breed.length < 3) {
            if (!props.breed.includes(breed_name)) {
                props.setBreed((breed) => [...breed, breed_name]);
            }
        }
        if (props.breed.includes(breed_name)) {
            props.setBreed(
                props.breed.filter(
                    (item, idx) => idx !== props.breed.indexOf(breed_name),
                ),
            );
        }
    };

    const breedNameHandler = (name) => {
        var blank_index = name.indexOf(' ');
        if (blank_index !== -1 && name.length >= 7) {
            var new_name = (
                <>
                    {name.slice(0, blank_index)} <br />
                    {name.slice(blank_index + 1)}
                </>
            );
        } else {
            new_name = name;
        }

        return new_name;
    };

    return (
        <Container>
            {Breed.map((item, idx) => (
                <Select
                    key={Breed[idx]['id']}
                    onClick={() => handleBreedPicker(idx)}
                    className={
                        props.breed.includes(Breed[idx]['name'])
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
                    <TextDiv>{breedNameHandler(Breed[idx]['name'])}</TextDiv>
                </Select>
            ))}
        </Container>
    );
};
export default BreedPicker;

const Container = styled.div`
    width: 80%;
    height: 85%;
    margin-left: 2%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Select = styled.button`
    width: 10%;
    height: 30%;
`;

const ImageDiv = styled.div`
    width: 90%;
    height: 55%;
`;

const TextDiv = styled.div`
    width: 90%;
    height: 20%;

    margin-top: 10%;
`;

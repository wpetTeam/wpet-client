import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import {
    ModalContainer,
    Header,
    Main,
    Footer,
    Input,
    SearchResult,
    Result,
    SelectContainer,
    SelectItem,
} from './style';
import './_style.scss';
import { Breed } from './breed.const';
import { handleBreedPicker, handleDeleteBreed } from './handlePicker';

const BreedModal = (props) => {
    const [search, setSearch] = useState('');

    const filteredBreed = Breed.filter((item) => {
        return item.name.includes(search);
    });

    console.log(
        filteredBreed.sort(function (a, b) {
            let a_name = a.name;
            let b_name = b.name;
            return a_name === b_name ? 0 : a_name > b_name ? 1 : -1;
        }),
    );

    return (
        <ModalContainer className="breed-modal">
            <Header>
                <p style={{ fontSize: '1.12em' }}>
                    반려견 종을 검색해 추가하세요 🔍
                </p>
                <IoCloseSharp
                    size={26}
                    className="close-icon"
                    onClick={() => props.setShowModal(false)}
                />
            </Header>
            <Main>
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SearchResult>
                    {filteredBreed
                        .sort(function (a, b) {
                            let a_name = a.name;
                            let b_name = b.name;
                            return a_name === b_name
                                ? 0
                                : a_name > b_name
                                ? 1
                                : -1;
                        })
                        .map((item) => (
                            <Result
                                key={item.id}
                                onClick={() =>
                                    handleBreedPicker(
                                        item.name,
                                        props.breed,
                                        props.setBreed,
                                    )
                                }
                            >
                                {item.name}
                            </Result>
                        ))}
                </SearchResult>
            </Main>
            <Footer>
                <p style={{ fontSize: '0.7em' }}>이미 선택한 견종 (최대 3개)</p>
                <SelectContainer>
                    {props.breed.map((item) => (
                        <SelectItem>
                            {item}
                            <IoCloseSharp
                                className="delete-icon"
                                size={16}
                                onClick={() =>
                                    handleDeleteBreed(
                                        item,
                                        props.breed,
                                        props.setBreed,
                                    )
                                }
                            />
                        </SelectItem>
                    ))}
                </SelectContainer>
            </Footer>
        </ModalContainer>
    );
};
export default BreedModal;

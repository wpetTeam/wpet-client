import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { IoPawSharp, IoCloseSharp } from 'react-icons/io5';
import { Button } from 'PetInfo/components/Register';
import BreedPicker from '../BreedPicker';
import BreedModal from '../BreedPicker/BreedModal';
import { SelectItem } from 'PetInfo/components/Register/BreedPicker/styles/style';
import { handleDeleteBreed } from '../BreedPicker/handlePicker';
import {
    Container,
    Text,
    BreedArticle,
    Header,
    Footer,
    PlusButton,
} from './styles/style';
import './styles/_style.scss';

const Step2 = (props) => {
    const [breeds, setBreeds] = useState([]);
    const [selectBreed, setSelectBreed] = useState([]);
    const [showsModal, setShowsModal] = useState(false);

    useEffect(() => {
        setBreeds(props.breeds);
    }, []);

    const handleButton = () => {
        props.setPetInfo({
            ...props.petInfo,
            breed: selectBreed,
        });
        if (selectBreed.length >= 1) props.setStep(props.step + 1);
        else alert('1개 이상 선택하세요');
    };

    return (
        <Container className="page-step2">
            <Header className="step2-header">
                <Text style={{ color: 'black' }}>
                    반려견 종을 선택해주세요. 최대 3개까지 선택 가능합니다.
                </Text>
                <ModalBtn
                    setShowsModal={setShowsModal}
                    showsModal={showsModal}
                />
            </Header>
            <BreedArticle>
                <BreedPicker
                    breeds={breeds}
                    selectBreed={selectBreed}
                    setSelectBreed={setSelectBreed}
                />
            </BreedArticle>
            <Footer>
                <SelectBreedList
                    handleDeleteBreed={handleDeleteBreed}
                    selectBreed={selectBreed}
                    setSelectBreed={setSelectBreed}
                />
                <Button text="다음 단계" onClick={handleButton} />
            </Footer>
            {showsModal && (
                <BreedModal
                    breeds={breeds}
                    selectBreed={selectBreed}
                    setSelectBreed={setSelectBreed}
                    setShowModal={setShowsModal}
                />
            )}
        </Container>
    );
};
export default Step2;

function ModalBtn({ setShowsModal, showsModal }) {
    return (
        <div className="add-breed" onClick={() => setShowsModal(true)}>
            <PlusButton
                className={showsModal ? 'more-button open' : 'more-button'}
            >
                찾는 반려견 종이 없어요!
            </PlusButton>
            <IoPawSharp
                size={15}
                htmlFor="more-button"
                className={showsModal ? 'more-icon open' : 'more-icon'}
            />
        </div>
    );
}

function SelectBreedList({ handleDeleteBreed, selectBreed, setSelectBreed }) {
    return (
        <div className="check-breed">
            {selectBreed.map((item) => (
                <SelectItem key={uuid()}>
                    {item}
                    <IoCloseSharp
                        className="delete-icon"
                        size={16}
                        onClick={() =>
                            handleDeleteBreed(item, selectBreed, setSelectBreed)
                        }
                    />
                </SelectItem>
            ))}
        </div>
    );
}

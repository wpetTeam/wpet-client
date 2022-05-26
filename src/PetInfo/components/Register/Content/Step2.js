import React, { useState } from 'react';
import uuid from 'react-uuid';
import BreedPicker from '../BreedPicker';
import { IoPawSharp, IoCloseSharp } from 'react-icons/io5';
import { Button } from '../Button';
import {
    Container,
    Text,
    BreedArticle,
    Header,
    Footer,
    PlusButton,
} from './styles/style';
import './styles/_style.scss';
import BreedModal from '../BreedPicker/BreedModal';
import { SelectItem } from 'PetInfo/components/Register/BreedPicker/styles/style';
import { handleDeleteBreed } from '../BreedPicker/handlePicker';

const Step2 = (props) => {
    const [breed, setBreed] = useState([]);
    const [showsModal, setShowsModal] = useState(false);

    const handleButton = () => {
        props.setPetInfo({
            ...props.petInfo,
            breed: breed,
        });
        if (breed.length >= 1) props.setStep(props.step + 1);
        else alert('1개 이상 선택하세요');
    };

    return (
        <Container className="page-step2">
            <Header className="step2-header">
                <Text style={{ color: 'black' }}>
                    반려견 종을 선택해주세요. 최대 3개까지 선택 가능합니다.
                </Text>
                <div className="add-breed" onClick={() => setShowsModal(true)}>
                    <PlusButton
                        className={
                            showsModal ? 'more-button open' : 'more-button'
                        }
                    >
                        찾는 반려견 종이 없어요!
                    </PlusButton>
                    <IoPawSharp
                        size={15}
                        htmlFor="more-button"
                        className={showsModal ? 'more-icon open' : 'more-icon'}
                    />
                </div>
            </Header>
            <BreedArticle>
                <BreedPicker breed={breed} setBreed={setBreed} />
            </BreedArticle>
            <Footer>
                <div className="check-breed">
                    {breed.map((item) => (
                        <SelectItem key={uuid()}>
                            {item}
                            <IoCloseSharp
                                className="delete-icon"
                                size={16}
                                onClick={() =>
                                    handleDeleteBreed(item, breed, setBreed)
                                }
                            />
                        </SelectItem>
                    ))}
                </div>
                <Button text="다음 단계" onClick={handleButton} />
            </Footer>
            {showsModal && (
                <BreedModal
                    breed={breed}
                    setBreed={setBreed}
                    setShowModal={setShowsModal}
                />
            )}
        </Container>
    );
};
export default Step2;

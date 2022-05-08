import React, { useState } from 'react';
import BreedPicker from '../BreedPicker';
import { IoPawSharp, IoCloseSharp } from 'react-icons/io5';
import { SubmitButton } from '../SubmitButton';
import {
    Container,
    Text,
    BreedArticle,
    Header,
    Footer,
    PlusButton,
} from './style';
import 'DogInfo/components/Register/_style.scss';
import BreedModal from '../BreedPicker/BreedModal';
import { SelectItem } from 'DogInfo/components/Register/BreedPicker/style';
import { handleDeleteBreed } from '../BreedPicker/handlePicker';

const Step2 = (props) => {
    const [breed, setBreed] = useState([]);
    const [showModal, setShowModal] = useState(false);

    return (
        <Container className="page-step2">
            <Header className="step2-header">
                <Text>
                    반려견 종을 선택해주세요. 최대 3개까지 선택 가능합니다.
                </Text>
                <div className="add-breed">
                    <IoPawSharp size={15} className="more-icon" />
                    <PlusButton
                        className="more-button"
                        onClick={() => setShowModal(true)}
                    >
                        찾는 반려견 종이 없어요!
                    </PlusButton>
                </div>
            </Header>
            <BreedArticle>
                <BreedPicker breed={breed} setBreed={setBreed} />
            </BreedArticle>
            <Footer>
                <div className="check-breed">
                    {breed.map((item) => (
                        <SelectItem>
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
                <div className="next-button">
                    <SubmitButton
                        text="끝내기"
                        setStep={props.setStep}
                        step={props.step}
                    />
                    <SubmitButton
                        text="다음 단계"
                        setStep={props.setStep}
                        step={props.step}
                    />
                </div>
            </Footer>
            {showModal && (
                <BreedModal
                    breed={breed}
                    setBreed={setBreed}
                    setShowModal={setShowModal}
                />
            )}
        </Container>
    );
};
export default Step2;

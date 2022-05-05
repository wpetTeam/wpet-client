import React, { useState } from 'react';
import BreedPicker from '../BreedPicker';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { SubmitButton } from '../SubmitButton';
import { Container, Text, BreedArticle, Header, Footer } from './style';
import 'DogInfo/components/Register/_style.scss';

const Step2 = (props) => {
    const [breed, setBreed] = useState([]);

    return (
        <Container className="page-step1">
            <Header>
                <Text>
                    반려견 종을 선택해주세요. 최대 3개까지 선택 가능합니다.
                </Text>
            </Header>
            <BreedArticle>
                <BreedPicker breed={breed} setBreed={setBreed} />
            </BreedArticle>
            <Footer>
                <div className="add-breed">
                    <BsFillPatchQuestionFill className="icon" />
                    <p className="text">반려견 종이 없어요!</p>
                </div>
                <div>
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
        </Container>
    );
};
export default Step2;

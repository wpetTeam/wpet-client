import React from 'react';
import {
    Container,
    Text,
    InputContainer,
    Profile,
    Info,
    Label,
} from './styles/style.js';
import { Input } from 'DogInfo/components/Register/Input';

const Step3 = () => {
    return (
        <Container>
            <Text>아래의 항목을 입력해주세요</Text>
            <p>전부 다 입력하지 않아도 괜찮습니다.</p>
            <InputContainer>
                <Profile>
                    <Label>반려견 몸무게</Label>
                    <Input width="80px" text="kg" />
                    <Label>현재 복용중인 약이 있나요?</Label>
                    <div>
                        <div>
                            <Label>약 명</Label>
                            <Input width="230px" />
                        </div>
                        <Label>복용 횟수</Label>
                        <div>
                            <Input width="40px" text="일에" />
                            <Input width="40px" text="번" />
                        </div>
                    </div>
                </Profile>
                <Info></Info>
            </InputContainer>
        </Container>
    );
};
export default Step3;

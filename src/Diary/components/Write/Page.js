import React, { useState } from 'react';
import {
    Container,
    DateWeather,
    Title,
    Journal,
    Footer,
} from 'Diary/components/Write/styles/style';
import {
    Today,
    Content,
    Weather,
    CustomNav,
    DiaryPicture,
} from 'Diary/components/Write';
import { HexColorPicker } from 'react-colorful';

const WriteDiary = () => {
    /* /pet/getnames 에서 반려동물 이름 GET 하기 -> 상단에 체크박스 형식으로 구현(1명일 경우는 X, 2명 이상부터)*/
    const petList = ['미남', '미녀'];
    const [weather, setWeather] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [picture, setPicture] = useState('');

    const [color, setColor] = useState('#ebcfc6');
    const [selectColor, setSelectColor] = useState(false);

    return (
        <Container className="write-container">
            <div className="write-header">
                {petList.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
            <div></div>
            <div className="pic-container">
                <DiaryPicture
                    picture={picture}
                    setPicture={setPicture}
                    size="460px"
                    backgroundColor={color}
                />
            </div>
            <CustomNav
                selectColor={selectColor}
                setSelectColor={setSelectColor}
            />
            <div className="journal-container">
                <Journal className="journal-main">
                    <DateWeather>
                        <Today />
                        <Weather weather={weather} setWeather={setWeather} />
                    </DateWeather>
                    <Title>
                        <div className="title-text">제목 {'  '}: </div>
                        <input
                            className="input-text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="30자 이내로 작성해주세요"
                            maxLength={30}
                            color={color}
                        />
                    </Title>
                    <div style={{ height: '80%' }}>
                        <Content content={content} setContent={setContent} />
                    </div>
                </Journal>
                <Footer className="journal-footer">
                    <button className="complete-button">작성 완료</button>
                </Footer>
            </div>

            {selectColor && (
                <HexColorPicker
                    className="background-color-picker"
                    color={color}
                    onChange={setColor}
                />
            )}
        </Container>
    );
};
export default WriteDiary;

import React, { useState } from 'react';
import {
    Container,
    Picture,
    DateWeather,
    Title,
    Journal,
    Footer,
} from 'Diary/components/Write/styles/style';

import { Today, Content, Weather, CustomNav } from 'Diary/components/Write';
import { HexColorPicker } from 'react-colorful';

const WriteDiary = () => {
    const [weather, setWeather] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [color, setColor] = useState('#f3c5b670');
    const [selectColor, setSelectColor] = useState(false);

    return (
        <Container className="write-container" backgroundColor={color}>
            <div className="picture-container">
                <Picture />
            </div>
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
            <CustomNav
                selectColor={selectColor}
                setSelectColor={setSelectColor}
            />
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

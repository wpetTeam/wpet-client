import React, { useState } from 'react';
import {
    WriteContainer,
    PictureContainer,
    JournalContainer,
    Picture,
    DateWeather,
    Title,
    Input,
    Journal,
    FinishButton,
} from 'Diary/styles/style';
import Today from './Today';
import Weather from './Weather';
import { Content } from './Content';
import { CustomNav } from './CustomNav';
import { HexColorPicker } from 'react-colorful';

const WriteDiary = () => {
    const [date, setDate] = useState('');
    const [weather, setWeather] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [color, setColor] = useState('#f3c5b670');
    const [selectColor, setSelectColor] = useState(false);

    console.log(date, weather, title, content);

    return (
        <WriteContainer className="write-container" backgroundColor={color}>
            <PictureContainer className="picture-container">
                <Picture />
            </PictureContainer>
            <JournalContainer className="journal-container">
                <Journal className="journal-main">
                    <DateWeather>
                        <Today setDate={setDate} color={color} />
                        <Weather weather={weather} setWeather={setWeather} />
                    </DateWeather>
                    <Title>
                        <div className="title-text">제목 {'  '}: </div>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="20자 이내로 작성해주세요"
                            color={color}
                        />
                    </Title>
                    <div style={{ height: '80%' }}>
                        <Content
                            content={content}
                            setContent={setContent}
                            color={color}
                        />
                    </div>
                </Journal>
                <FinishButton className="journal-footer">
                    <button className="complete-button">작성 완료</button>
                </FinishButton>
            </JournalContainer>
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
        </WriteContainer>
    );
};
export default WriteDiary;

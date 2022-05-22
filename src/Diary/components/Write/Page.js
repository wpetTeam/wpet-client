import React, { useState } from 'react';
import {
    Today,
    Content,
    Weather,
    CustomNav,
    DiaryPicture,
} from 'Diary/components/Write';
import { Icon } from '@iconify/react';

const WriteDiary = () => {
    /* /pet/getnames 에서 반려동물 이름 GET 하기 -> 상단에 체크박스 형식으로 구현(1명일 경우는 X, 2명 이상부터)*/
    const petList = ['미남', '미녀', '두콩', '세콩'];
    const [weather, setWeather] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [picture, setPicture] = useState('');

    const [color, setColor] = useState('#ebcfc6');
    const [selectColor, setSelectColor] = useState(false);

    return (
        <React.Fragment>
            <div className="write-container">
                <div className="write-main">
                    <div className="pic-container">
                        <DiaryPicture
                            picture={picture}
                            setPicture={setPicture}
                            size="450px"
                            backgroundColor={color}
                        />
                    </div>
                    <div className="nav-container">
                        <CustomNav
                            color={color}
                            setColor={setColor}
                            selectColor={selectColor}
                            setSelectColor={setSelectColor}
                        />
                    </div>
                    <div className="journal-container">
                        <DateWeather
                            weather={weather}
                            setWeather={setWeather}
                        />
                        <Title
                            title={title}
                            setTitle={setTitle}
                            color={color}
                        />
                        <Content content={content} setContent={setContent} />
                    </div>
                </div>
                <Footer petList={petList} />
            </div>
        </React.Fragment>
    );
};
export default WriteDiary;

function DateWeather({ weather, setWeather }) {
    return (
        <div className="journal-dateweather">
            <Today />
            <Weather weather={weather} setWeather={setWeather} />
        </div>
    );
}

function Title({ title, e, setTitle, color }) {
    return (
        <div className="journal-title">
            <div className="title-text">제목 {'  '}: </div>
            <input
                className="input-text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="30자 이내로 작성해주세요"
                maxLength={30}
                color={color}
            />
        </div>
    );
}

function Footer({ petList }) {
    return (
        <div className="write-footer">
            <div className="pet-choice">
                <label className="text-label">누구의 일기인가요?</label>
                <div className="pet-list">
                    {petList.map((item) => (
                        <label>
                            <input
                                name={item}
                                className="check-input"
                                id="input"
                                type="checkbox"
                            />
                            <Icon
                                icon="ph:paw-print-fill"
                                className="custom-checkbox"
                                htmlFor="input"
                            />
                            {/* <span
                                className="custom-checkbox"
                                htmlFor="input"
                            ></span> */}
                            <span className="custom-label" htmlFor="input">
                                {item}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <button className="complete-btn">작성 완료</button>
            </div>
        </div>
    );
}

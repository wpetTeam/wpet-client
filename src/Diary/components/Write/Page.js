import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import {
    Today,
    Content,
    Weather,
    CustomNav,
    DiaryPicture,
} from 'Diary/components/Write';
import { Icon } from '@iconify/react';
import { API } from 'utils';

const WriteDiary = () => {
    const [userPets, setUserPets] = useState([]);

    useEffect(() => {
        const getUserPets = async () => {
            await API.get('/pet/getnames', {
                withCredentials: true,
            }).then((res) => {
                console.log('>>> [GET USER PETS] ✅ SUCCESS');
                setUserPets(res.data.result);
            });
        };
        getUserPets();
    }, []);

    console.log(userPets);

    const [weather, setWeather] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [picture, setPicture] = useState('');
    const [color, setColor] = useState('#ebcfc6');
    const [selectColor, setSelectColor] = useState(false);

    const handleCreateBtn = async () => {
        // 오류 400번 / 형식 물어보기
        const diaryData = {
            petIDs: [6],
            title: title,
            picture: picture,
            texts: '미남이가 미용을 했다',
            shareIs: 0,
            petState: 'happy',
            weather: weather,
            color: color,
            font: 'Pretendard',
            hashTags: ['반려견'],
        };
        await API.post('/diary/create', diaryData, {
            withCredentials: true,
        })
            .then((res) => {
                console.log('>>> [DIARY CREATE] ✅ SUCCESS');
                console.log(diaryData);
            })
            .catch((err) => console.log('>>> [DIARY CREATE] ❌ ERROR', err));
    };

    return (
        <React.Fragment>
            <div className="write-container">
                <div className="write-main">
                    <div className="pic-container">
                        <DiaryPicture
                            picture={picture}
                            setPicture={setPicture}
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
                <Footer userPets={userPets} hadleCreateBtn={handleCreateBtn} />
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

function Title({ title, setTitle, color }) {
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

function Footer({ userPets, hadleCreateBtn }) {
    return (
        <div className="write-footer">
            {userPets.length > 1 && (
                <div className="pet-choice">
                    <label className="text-label">누구의 일기인가요?</label>
                    <div className="pet-list">
                        {userPets.map((item) => (
                            <label key={uuid()}>
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
                                <span className="custom-label" htmlFor="input">
                                    {item.petName}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

            <div>
                <button className="complete-btn" onClick={hadleCreateBtn}>
                    작성 완료
                </button>
            </div>
        </div>
    );
}

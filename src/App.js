import { Route, Routes } from 'react-router-dom';
import { About, Home, Diary, Community, Settings, DogInfo } from 'pages';
import { Register } from 'PetInfo/components';
import { WriteDiary } from 'Diary/components';
import Schedule from 'MyPage/components/Schedule';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path="mypage" element={<Settings />}>
                    <Route path="account" element={<Schedule />} />
                </Route>
                <Route path="diary" element={<Diary />}>
                    <Route path="write" element={<WriteDiary />} />
                </Route>
                <Route path="pet-info" element={<DogInfo />}>
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="community" element={<Community />} />
            </Routes>
        </>
    );
}

export default App;

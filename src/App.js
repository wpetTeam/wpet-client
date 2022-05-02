import { Route, Routes } from 'react-router-dom';
import { About, Home, Diary, Community, Settings, DogInfo } from 'pages';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path="settings" element={<Settings />} />
                <Route path="diary" element={<Diary />} />
                <Route path="dog-info" element={<DogInfo />} />
                <Route path="community" element={<Community />} />
            </Routes>
        </>
    );
}

export default App;

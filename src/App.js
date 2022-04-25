import { Route, Routes } from 'react-router-dom';
import { About, Home } from 'pages';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;

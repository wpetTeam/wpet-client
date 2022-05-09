import React, { useState } from 'react';
import { Container, Nav, Article } from 'assets/styles/tabStyle';
import 'Diary/styles/_style.scss';
import { ReadDiary, Tab, WriteDiary } from 'Diary/components';

const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="diary">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {tab === 0 && <ReadDiary />}
                {tab === 1 && <WriteDiary />}
            </Article>
        </Container>
    );
};
export default Main;

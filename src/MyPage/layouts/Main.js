import React, { useState } from 'react';
import { Tab } from 'MyPage/components';
import MyAccount from '../components/MyAccount';
import { Container, Nav, Article } from 'assets/styles/common/tabStyle';
import Schedule from 'MyPage/components/Schedule';

const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="settings">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {tab === 0 && <Schedule />}
                {tab === 1 && <MyAccount />}
            </Article>
        </Container>
    );
};
export default Main;

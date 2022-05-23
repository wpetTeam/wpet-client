import React, { useState } from 'react';
import { Tab } from 'MyPage/components';
import { Container, Nav, Article } from 'assets/styles/common/tabStyle';
import { Schedule, MyAccount } from 'MyPage/components';

const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="mypage">
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

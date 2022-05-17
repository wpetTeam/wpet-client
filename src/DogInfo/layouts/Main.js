import React, { useState } from 'react';
import 'DogInfo/styles/_style.scss';
import { CheckInfo, Register, Tab } from 'DogInfo/components';
import { Container, Nav, Article } from 'assets/styles/common/tabStyle';

const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="dog-info">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {tab === 0 && <CheckInfo />}
                {tab === 1 && <Register />}
            </Article>
        </Container>
    );
};
export default Main;

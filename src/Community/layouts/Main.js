import React, { useState } from 'react';
import { Container, Nav, Article } from 'assets/styles/tabStyle';
import 'DogInfo/styles/_style.scss';
import { Tab } from 'Community/components';

const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="dog-info">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {/* {tab === 0 && <CheckInfo />}
                {tab === 1 && <Register />} */}
            </Article>
        </Container>
    );
};
export default Main;

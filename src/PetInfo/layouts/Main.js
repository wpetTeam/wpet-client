import React, { useState } from 'react';
import 'PetInfo/styles/_style.scss';
import { CheckInfo, Register, Tab } from 'PetInfo/components';
import { Container, Nav, Article } from 'assets/styles/common/tabStyle';

const Main = (props) => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="dog-info">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {tab === 0 && <CheckInfo breeds={props.breeds} />}
                {tab === 1 && <Register breeds={props.breeds} />}
            </Article>
        </Container>
    );
};
export default Main;

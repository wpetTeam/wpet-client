import React, { useState } from 'react';
import styled from 'styled-components';
import 'assets/styles/DogInfo/_style.scss';
import { Frame, Tab } from 'components/DogInfo';

const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="dog-info">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>{tab === 1 && <Frame />}</Article>
        </Container>
    );
};
export default Main;

const Container = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: row;
`;

const Nav = styled.div`
    width: 5.5%;
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Article = styled.div`
    width: 90%;
    height: 90%;

    margin-left: 1%;
`;

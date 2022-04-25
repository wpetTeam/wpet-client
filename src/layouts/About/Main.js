import React, { useState } from 'react';
import styled from 'styled-components';
import { IoPawSharp } from 'react-icons/io5';

import { Pagination, Page1, Page2, Page3 } from 'components/About';
import { Slider, Content, Nav, Aside } from 'assets/styles/About/style';
import 'assets/styles/About/_style.scss';

const Container = styled.div`
    width: 94%;
    height: 77%;

    margin-top: -3%;
    margin-bottom: 1%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Main = () => {
    const pageSlider = [
        { id: 1, components: <Page1 /> },
        { id: 2, components: <Page2 /> },
        { id: 3, components: <Page3 /> },
    ];

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== pageSlider.length) {
            setSlideIndex(slideIndex + 1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <Container>
            <Aside>
                {slideIndex !== 1 && (
                    <Pagination
                        moveSlide={prevSlide}
                        direction="prev"
                        isShow="True"
                    />
                )}
            </Aside>
            <Slider>
                <Content>
                    {pageSlider.map((obj, index) => {
                        return (
                            <div
                                key={obj.id}
                                className={
                                    slideIndex === index + 1
                                        ? 'slide active-anim'
                                        : 'slide'
                                }
                            >
                                {pageSlider[index]['components']}
                            </div>
                        );
                    })}
                </Content>
                <Nav>
                    {Array.from({ length: 3 }).map((item, index) => (
                        <IoPawSharp
                            key={index}
                            onClick={() => moveDot(index + 1)}
                            className={
                                slideIndex === index + 1 ? 'paw active' : 'paw'
                            }
                            size={15}
                        />
                    ))}
                </Nav>
            </Slider>
            <Aside>
                {slideIndex !== pageSlider.length && (
                    <Pagination
                        moveSlide={nextSlide}
                        direction="next"
                        isShow="True"
                    />
                )}
            </Aside>
        </Container>
    );
};

export default Main;

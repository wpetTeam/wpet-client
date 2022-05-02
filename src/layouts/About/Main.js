import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoPawSharp } from 'react-icons/io5';
import { useInterval } from 'utils';
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

const Main = (props) => {
    const pageSlider = [
        { id: 1, component: <Page1 /> },
        { id: 2, component: <Page2 /> },
        { id: 3, component: <Page3 /> },
    ];

    const [slideIndex, setSlideIndex] = useState(1);

    /* 애니메이션 함수 */
    const delay = 5000;
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (props.isBlur === true) {
            setIsRunning(false);
        } else {
            setIsRunning(true);
        }
    }, [props.isBlur]);

    useInterval(
        () => {
            if (slideIndex === pageSlider.length) {
                setSlideIndex(1);
            } else setSlideIndex(slideIndex + 1);
        },
        isRunning ? delay : null,
    );

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
    const movePaw = (index) => {
        setSlideIndex(index);
    };

    return (
        <Container>
            <Aside>
                {slideIndex !== 1 && (
                    <Pagination moveSlide={prevSlide} direction="prev" />
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
                                {pageSlider[index]['component']}
                            </div>
                        );
                    })}
                </Content>
                <Nav>
                    {Array.from({ length: 3 }).map((item, index) => (
                        <IoPawSharp
                            key={index}
                            onClick={() => movePaw(index + 1)}
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
                    <Pagination moveSlide={nextSlide} direction="next" />
                )}
            </Aside>
        </Container>
    );
};

export default Main;

import React from 'react';
import slide_1 from '../assets/img/slide_1.jpeg'
import slide_2 from '../assets/img/slide_2.jpeg'
import slide_3 from '../assets/img/slide_3.jpeg'
import Carousel from 'react-elastic-carousel';

function Slider() {
    return (
        <div className="slider">
            <Carousel>
                <img className="slider__img" src={slide_1} alt="" />
                <img className="slider__img" src={slide_2} alt="" />
                <img className="slider__img" src={slide_3} alt=""/>
            </Carousel>
        </div>
    );
}

export default Slider;
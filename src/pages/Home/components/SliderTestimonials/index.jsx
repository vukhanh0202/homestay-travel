import $ from 'jquery';
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Images from '../../../../constants/images';
import TestimonialItem from '../TestimonialItem';
import './styles.scss';

SliderTestimonials.propTypes = {

};

function SliderTestimonials() {
    return (
        <OwlCarousel className='testimonial-slider owl-carousel' loop items={1} dots={false} smartSpeed={1200}
            autoplay nav={true} navText={["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]}>
            <TestimonialItem />
            <TestimonialItem />
        </OwlCarousel>
    );
}

export default SliderTestimonials;
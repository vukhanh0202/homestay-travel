import $ from 'jquery';
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Images from '../../../../constants/images';
import './styles.scss';

TestimonialItem.propTypes = {

};

function TestimonialItem() {

    return (
        <div className="ts-item">
            <p>After a construction project took longer than expected, my husband, my daughter and I
            needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
            city, neighborhood and the types of housing options available and absolutely love our
                    vacation at Sona Hotel.</p>
            <div className="ti-author">
                <div className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star-half_alt" />
                </div>
                <h5> - Alexander Vasquez</h5>
            </div>
            <img src={Images.TESTIMONIAL_LOGO} alt="" />
        </div>
    );
}

export default TestimonialItem;
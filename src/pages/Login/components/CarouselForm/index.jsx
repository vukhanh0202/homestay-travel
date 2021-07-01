import $ from 'jquery';
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Images from '../../../../constants/images';
import './styles.scss'


function CarouselLogin() {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, [])

    return (
        <div className="carousel-login-wrapper">
            <OwlCarousel className='carousel-login owl-carousel' loop margin={0} items={1} dots animateOut={'fadeOut'}
                animateIn={'fadeIn'} smartSpeed={1200} autoHeight={false} autoplay mouseDrag={false}>
                <div className="hs-item set-bg" data-setbg={Images.SLIDE_BANNER_1} />
                <div className="hs-item set-bg" data-setbg={Images.SLIDE_BANNER_2} />
                <div className="hs-item set-bg" data-setbg={Images.SLIDE_BANNER_3} />
            </OwlCarousel>
        </div>
       
    );
}

export default CarouselLogin;
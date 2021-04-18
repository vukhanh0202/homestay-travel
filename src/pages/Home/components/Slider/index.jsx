import $ from 'jquery';
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Images from '../../../../constants/images';
import './styles.scss';

Slider.propTypes = {

};

function Slider() {
    useEffect(() => {

        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

    }, [])

    return (
        <OwlCarousel className='hero-slider owl-carousel' loop margin={0} items={1} dots animateOut={'fadeOut'}
            animateIn={'fadeIn'} smartSpeed={1200} autoHeight={false} autoplay mouseDrag={false}>
            <div className="hs-item set-bg" data-setbg={Images.SLIDE_BANNER_1} />
            <div className="hs-item set-bg" data-setbg={Images.SLIDE_BANNER_2} />
            <div className="hs-item set-bg" data-setbg={Images.SLIDE_BANNER_3} />
        </OwlCarousel>
    );
}

export default Slider;
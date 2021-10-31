import $ from 'jquery';
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './styles.scss';

function SliderBanner(props) {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, [])

    return (
        <OwlCarousel className={`owl-carousel hero-slider ${props.className}`} loop margin={0} items={1} dots animateOut={'fadeOut'}
            animateIn={'fadeIn'} smartSpeed={1200} autoHeight={false} autoplay mouseDrag={false}>
                {props.list.map(item => {
                        return (<div style={{backgroundSize: 'cover'}} className="hs-item set-bg" data-setbg={item} />
                        );
                })}
        </OwlCarousel>
    );
}

export default SliderBanner;
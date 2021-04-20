import React, { useEffect } from 'react';
import $ from 'jquery';
import './styles.scss';
import Images from '../../../../constants/images';

VideoSection.propTypes = {

};

function VideoSection(props) {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, [])
    return (
        <section className="video-section set-bg" data-setbg={Images.VIDEO_BG}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="video-text">
                            <h2>Discover Our Hotel &amp; Services.</h2>
                            <p>It S Hurricane Season But We Are Visiting Hilton Head Island</p>
                            <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><img src="img/play.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;
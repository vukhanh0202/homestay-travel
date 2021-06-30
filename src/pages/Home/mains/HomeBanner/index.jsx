import React from 'react';
import FormBooking from '../../components/FormBooking';
import SliderBanner from '../../components/SliderBanner';
import './styles.scss';


HomeBanner.propTypes = {

};

function HomeBanner() {


    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-text">
                            <h1>Luxury Homestay</h1>
                            <p>Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Homestay Travel.</p>
                            <a href="#" className="primary-btn">Khám Phá Ngay</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
                        <FormBooking />
                    </div>
                </div>
            </div>
            <SliderBanner />
        </section>
    );
}

export default HomeBanner;
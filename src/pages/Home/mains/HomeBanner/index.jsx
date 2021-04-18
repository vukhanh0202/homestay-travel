import React from 'react';
import FormBooking from '../../components/FormBooking';
import Slider from '../../components/Slider';
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
                            <h1>Sona A Luxury Hotel</h1>
                            <p>Here are the best hotel booking sites, including recommendations for international
                  travel and for finding low-priced hotel rooms.</p>
                            <a href="#" className="primary-btn">Discover Now</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
                        <FormBooking />
                    </div>
                </div>
            </div>
            <Slider />
        </section>
    );
}

export default HomeBanner;
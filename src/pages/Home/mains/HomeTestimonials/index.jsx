import React from 'react';
import SliderTestimonials from '../../components/SliderTestimonials';
import './styles.scss';

HomeTestimonials.propTypes = {

};

function HomeTestimonials() {

    return (
        <section className="testimonial-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Testimonials</span>
                            <h2>What Customers Say?</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <SliderTestimonials />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeTestimonials;
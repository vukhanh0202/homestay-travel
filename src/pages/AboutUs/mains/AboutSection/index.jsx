import React, { useState } from 'react';
import Images from '../../../../constants/images';
import ServiceItem from '../../components/ServiceItem';
import './styles.scss';

AboutSection.propTypes = {

};

function AboutSection(props) {

    const [items, setItems] = useState(
        [
            {
                title: 'Restaurants Services',
                img: Images.ABOUT_P1,
            },
            {
                title: 'Travel & Camping',
                img: Images.ABOUT_P2,
            }, {
                title: 'Event & Party',
                img: Images.ABOUT_P3,
            },
        ]
    );
    const elemts = items.map((item, index) => {
        return <div key={index} className="col-md-4">
            <ServiceItem item={item} />
        </div>
    });
    return (
        <section className="aboutus-page-section spad">
            <div className="container">
                <div className="about-page-text">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ap-title">
                                <h2>Welcome To Sona.</h2>
                                <p>Built in 1910 during the Belle Epoque period, this hotel is located in the center of
                                Paris, with easy access to the city’s tourist attractions. It offers tastefully
                    decorated rooms.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <ul className="ap-services">
                                <li><i className="icon_check" /> 20% Off On Accommodation.</li>
                                <li><i className="icon_check" /> Complimentary Daily Breakfast</li>
                                <li><i className="icon_check" /> 3 Pcs Laundry Per Day</li>
                                <li><i className="icon_check" /> Free Wifi.</li>
                                <li><i className="icon_check" /> Discount 20% On F&amp;B</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about-page-services">
                    <div className="row">
                        {elemts}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
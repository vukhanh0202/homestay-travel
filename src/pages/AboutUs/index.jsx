import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import AboutSection from './mains/AboutSection';
import GallerySection from './mains/GallerySection';
import VideoSection from './mains/VideoSection';
import './styles.scss';

AboutUs.propTypes = {

};

function AboutUs(props) {
    const [breadcrumb, setBreadCrumb] = useState({
        title: 'About Us',
        breadcrumb: [
            {
                name: 'Home',
            }
        ],
        current: 'About Us'
    });
    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <AboutSection />
            <VideoSection />
            <GallerySection />
        </div>
    );
}

export default AboutUs;
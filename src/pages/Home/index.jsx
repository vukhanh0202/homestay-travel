import React from 'react';
import HomeAboutUs from './mains/HomeAboutUs';
import HomeBanner from './mains/HomeBanner';
import HomeBlog from './mains/HomeBlog';
import HomeRoom from './mains/HomeRoom';
import HomeService from './mains/HomeService';
import HomeTestimonials from './mains/HomeTestimonials';
import './styles.scss';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <HomeBanner />
            <HomeAboutUs />
            <HomeService />
            <HomeRoom />
            <HomeTestimonials />
            <HomeBlog />
        </div>
    );
}

export default Home;
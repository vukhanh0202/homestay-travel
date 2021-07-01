import React from 'react';
import HomeAboutUs from './mains/HomeAboutUs';
import HomeBanner from './mains/HomeBanner';
import HomeBlog from './mains/HomeBlog';
import HomeRoom from './mains/HomeRoom';
import HomeHighlight from './mains/HomeHighlight';
import HomeToday from './mains/HomeToday';
import HomeService from './mains/HomeService';
import HomeTestimonials from './mains/HomeTestimonials';
import './styles.scss';
import RoomDetail from '../RoomDetail';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <HomeBanner />
            <HomeHighlight />
            <HomeToday />
            <HomeAboutUs />
            {/*
            <HomeTestimonials />
            <HomeService />
            <HomeRoom />
            <HomeBlog />
            */}
        </div>
    );
}

export default Home;
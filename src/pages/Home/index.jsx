import React from 'react';
import HomeAboutUs from './mains/HomeAboutUs';
import HomeBanner from './mains/HomeBanner';
import HomeHighlight from './mains/HomeHighlight';
import HomeToday from './mains/HomeToday';
import './styles.scss';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <HomeBanner />
            <HomeHighlight />
            <HomeToday />
            <HomeAboutUs />
        </div>
    );
}

export default Home;
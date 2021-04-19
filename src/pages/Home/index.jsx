import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import HomeBanner from './mains/HomeBanner';
import HomeAboutUs from './mains/HomeAboutUs';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <HomeBanner />
            <HomeAboutUs />
        </div>
    );
}

export default Home;
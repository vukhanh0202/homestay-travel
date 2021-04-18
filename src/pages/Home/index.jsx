import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import HomeBanner from './mains/HomeBanner';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <HomeBanner />
        </div>
    );
}

export default Home;
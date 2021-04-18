import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Images from '../../constants/images';
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';

Header.propTypes = {

};

function Header() {
    return (
        <div>
            {/*Offcanvas Menu Section Begin*/}
            <MobileMenu />
            {/*Offcanvas Menu Section End*/}

            {/*Header Section Begin*/}
            <DesktopMenu />
            {/*Header Section End*/}
        </div>
    );
}

export default Header;
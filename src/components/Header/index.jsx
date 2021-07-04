import React from 'react';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from './components/MobileMenu';
import './styles.scss';

Header.propTypes = {

};

function Header({ disableTop }) {
    return (
        <div>
            {/*Offcanvas Menu Section Begin*/}
            <MobileMenu disableTop={disableTop} />
            {/*Offcanvas Menu Section End*/}

            {/*Header Section Begin*/}
            <DesktopMenu disableTop={disableTop} />
            {/*Header Section End*/}
        </div>
    );
}

export default Header;
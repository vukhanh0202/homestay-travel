import React from 'react';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from './components/MobileMenu';
import './styles.scss';

Header.propTypes = {

};

function Header(props) {
    return (
        <div>
            {/*Offcanvas Menu Section Begin*/}
            <MobileMenu />
            {/*Offcanvas Menu Section End*/}

            {/*Header Section Begin*/}
            <DesktopMenu setContent={props.setContent} />
            {/*Header Section End*/}
        </div>
    );
}

export default Header;
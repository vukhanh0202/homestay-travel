import $ from 'jquery';
import React, { useEffect } from 'react';
import Images from '../../../../constants/images';
import './styles.scss';


MobileMenu.propTypes = {

};

function MobileMenu() {
    return (

        <div>
            {/*Offcanvas Menu Section Begin*/}
            <div className="offcanvas-menu-overlay" />
            <div className="canvas-open">
                <i className="fa fa-bars" />
            </div>
            <div className="offcanvas-menu-wrapper">
                <div className="canvas-close">
                    <i className="fa fa-times" />
                </div>
                <div className="search-icon  search-switch">
                    <i className="fa fa-search" />
                </div>
                <div className="header-configure-area">
                    <div className="language-option">
                        <img src={Images.FLAT_US} alt="" />
                        <span>EN <i className="fa fa-angle-down" /></span>
                        <div className="flag-dropdown">
                            <ul>
                                <li><a href="#">Zi</a></li>
                                <li><a href="#">Fr</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href="#" className="bk-btn">Booking Now</a>
                </div>
                <nav className="mainmenu mobile-menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="./rooms.html">Rooms</a></li>
                        <li><a href="./about-us.html">About Us</a></li>
                        <li><a href="./pages.html">Pages</a>
                            <ul className="dropdown">
                                <li><a href="./room-details.html">Room Details</a></li>
                                <li><a href="#">Deluxe Room</a></li>
                                <li><a href="#">Family Room</a></li>
                                <li><a href="#">Premium Room</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">News</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap" />
                <div className="top-social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-tripadvisor" /></a>
                    <a href="#"><i className="fa fa-instagram" /></a>
                </div>
                <ul className="top-widget">
                    <li><i className="fa fa-phone" /> (12) 345 67890</li>
                    <li><i className="fa fa-envelope" /> info.colorlib@gmail.com</li>
                </ul>
            </div>
            {/*Offcanvas Menu Section End*/}
        </div>
    );
}

export default MobileMenu;
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Images from '../../../../constants/images';

DesktopMenu.propTypes = {

};

function DesktopMenu() {
    return (
        <div>
            <header className="header-section">
                <div className="top-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tn-left">
                                    <li><i className="fa fa-phone" /> (12) 345 67890</li>
                                    <li><i className="fa fa-envelope" /> info.colorlib@gmail.com</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tn-right">
                                    <div className="top-social">
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-tripadvisor" /></a>
                                        <a href="#"><i className="fa fa-instagram" /></a>
                                    </div>
                                    <a href="#" className="bk-btn">Booking Now</a>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <a href="./index.html">
                                        <img src={Images.LOGO} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="nav-menu">
                                    <nav className="mainmenu">
                                        <ul>
                                            <li className="active"><a href="./index.html">Home</a></li>
                                            <li><a href="./rooms.html">Rooms</a></li>
                                            <li><a href="./about-us.html">About Us</a></li>
                                            <li><a href="./pages.html">Pages</a>
                                                <ul className="dropdown">
                                                    <li><a href="./room-details.html">Room Details</a></li>
                                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                                    <li><a href="#">Family Room</a></li>
                                                    <li><a href="#">Premium Room</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="./blog.html">News</a></li>
                                            <li><a href="./contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                    <div className="nav-right search-switch">
                                        <i className="fa fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch"><i className="icon_close"></i></div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DesktopMenu;
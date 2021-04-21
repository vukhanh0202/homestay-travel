import React, { useEffect, useState } from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import Images from '../../../../constants/images';
import ROUTES, { RenderRoutes } from '../../../../router/routerConfig';
import Search from '../../../Search';
import './styles.scss';

DesktopMenu.propTypes = {

};

function DesktopMenu(props) {

    const [path, setPath] = useState('');
    useEffect(() => {
        props.setContent(() => <RenderRoutes setPath={setPath} routes={ROUTES} />);
    }, [])

    return (
        <div>
            <header className="header-section">
                <div className="top-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="tn-left">
                                    <li><i className="fa fa-phone" /> (84) 858 8100 938</li>
                                    <li><i className="fa fa-envelope" /> ktpm2018@uit.edu.vn</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="tn-right">
                                    <div className="top-social">
                                        <a href="#"><i className="fa fa-facebook" /></a>
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
                                        {/*
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
                                       
                                        */}

                                        {displayRouteMenu(ROUTES, path)}

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
            <Search />
        </div>
    );
}

export default DesktopMenu;

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
function displayRouteMenu(routes, path) {

    /**
     * Render a single route as a list item link to the config's pathname
     */
    function singleRoute(route) {
        var active = route.path === path ? 'active' : '';
        return (
            <li key={route.key} className={active}>
                <Link to={route.path} > {route.display} </Link>
            </li>
        );
    }

    // loop through the array of routes and generate an unordered list
    return (
        <ul>
            {routes.map(route => {
                // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
                if (route.routes) {
                    return (
                        <React.Fragment key={route.key}>
                            {singleRoute(route)}
                            {displayRouteMenu(route.routes)}
                        </React.Fragment>
                    );
                }

                // no nested routes, so just render a single route
                return singleRoute(route);
            })}
        </ul>
    );
}
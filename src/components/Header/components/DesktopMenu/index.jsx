import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Images from '../../../../constants/images';
import './styles.scss';
import { useHistory } from 'react-router-dom';

function DesktopMenu({disableTop}) {
    const history = useHistory()
    const toLogin = () => {
        history.push(`/dang-nhap`);
    }

    return (
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
                                    <a href="#" className={`bk-btn ${disableTop ? 'disable' : ''}`} onClick={() => toLogin()}>Đăng Nhập</a>
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
                                        <li>
                                            <Link to="/trang-chu" > Trang chủ </Link>
                                        </li>
                                        <li>
                                            <Link to="/lien-lac" > Liên lạc </Link>
                                        </li>
                                    </nav>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default DesktopMenu;

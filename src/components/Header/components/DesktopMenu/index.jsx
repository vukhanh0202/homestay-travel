import { Popover } from "antd";
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Images from '../../../../constants/images';
import './styles.scss';

function DesktopMenu({ disableTop }) {
    const history = useHistory()
    const toLogin = () => {
        history.push(`/dang-nhap`);
    }
    const toHome = () => {
        history.push(`/trang-chu`);
    }
    const removeLocal = () => {
        localStorage.removeItem('LOGIN')
        window.location.pathname = "/";
    }
    const favourite = () => {
        history.push(`/danh-sach-yeu-thich`);
    }
    const LogIn = localStorage.getItem('LOGIN');
    const content = (
        <div className="popup-content-wrapper">
            <ul className="popup-content">
                <li onClick={() => favourite()}>Danh sách yêu thích</li>
                <li onClick={() => removeLocal()}>Đăng xuất</li>
            </ul>
        </div>
    );
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
                                {LogIn
                                    ?
                                    <div className="icon-wrapper">
                                        <Popover className="popup" content={content} trigger="click">
                                            <div className="circle">
                                            </div>
                                        </Popover>
                                    </div>
                                    :
                                    <a href="#" className={`bk-btn ${disableTop ? 'disable' : ''}`} onClick={() => toLogin()}>Đăng Nhập</a>
                                }
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
                                <a onClick={() => toHome()}>
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
                                        <Link to="/danh-sach" > Danh sách </Link>
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

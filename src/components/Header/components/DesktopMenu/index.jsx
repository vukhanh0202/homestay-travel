import { Popover } from "antd";
import React, {useState} from 'react';
import { NavLink , useHistory } from 'react-router-dom';
import Images from '../../../../constants/images';
import useDocumentScroll from '../../../../hooks/useDocumentScroll'
import './styles.scss';

function DesktopMenu({ disableTop }) {
    const history = useHistory()
    const [shouldScrollHeader, setShouldScrollHeader] = useState(false);
    const MINIMUM_SCROLL = 10;
    useDocumentScroll(callbackData => {
        // eslint-disable-next-line
        const { previousScrollTop, currentScrollTop } = callbackData;
        if (currentScrollTop > MINIMUM_SCROLL) {
            setShouldScrollHeader(true)
        } else {
            setShouldScrollHeader(false)
        }
    });
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
    const topStyle = shouldScrollHeader ? 'disable' : '';
    return (
        <header className="header-section">
            <div className= {`top-nav ${topStyle}`}>
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
                                    <a href><i className="fa fa-facebook" /></a>
                                    <a href><i className="fa fa-instagram" /></a>
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
                                    <a href className={`bk-btn ${disableTop ? 'disable' : ''}`} onClick={() => toLogin()}>Đăng Nhập</a>
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
                                <a href onClick={() => toHome()}>
                                    <img src={Images.LOGO} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="nav-menu">
                                <nav className="mainmenu">
                                    <li>
                                        <NavLink  to="/trang-chu" activeClassName="is-active" > Trang chủ </NavLink >
                                    </li>
                                    <li>
                                        <NavLink  to="/danh-sach" activeClassName="is-active"> Danh sách </NavLink >
                                    </li>
                                    <li>
                                        <NavLink  to="/lien-lac" activeClassName="is-active"> Liên lạc </NavLink >
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

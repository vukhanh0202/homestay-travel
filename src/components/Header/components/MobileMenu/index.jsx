import React from 'react';
import Images from '../../../../constants/images';
import './styles.scss';
import { Popover } from "antd";
import { Link, useHistory } from 'react-router-dom';


function MobileMenu({ disableTop }) {

    const removeLocal = () => {
        localStorage.removeItem('LOGIN')
        window.location.pathname = "/";
    }
    const favourite = () => {
        history.push(`/danh-sach-yeu-thich`);
    }
    const history = useHistory()
    const toLogin = () => {
        history.push(`/dang-nhap`);
    }
    const toHome = () => {
        history.push(`/trang-chu`);
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
        <div className="mobile-menu">
            <div className="container-custom">
                <input id="toggle" type="checkbox" />
                <label class="toggle-container" for="toggle">
                    <span class="button button-toggle"></span>
                </label>
                <nav class="nav">
                    <li>
                        <Link to="/trang-chu" class="nav-item"> Trang chủ </Link>
                    </li>
                    <li>
                        <Link to="/danh-sach" class="nav-item"> Danh sách </Link>
                    </li>
                    <li>
                        <Link to="/lien-lac" class="nav-item"> Liên lạc </Link>
                    </li>
                </nav>
                {LogIn
                    ?
                    <div className="icon-wrapper">
                        <Popover className="popup" content={content} trigger="click">
                            <div className="circle">
                            </div>
                        </Popover>
                    </div>
                    :
                    <div className="btn-wrapper">
                        <a href="#" className={`bk-btn ${disableTop ? 'disable' : ''}`} onClick={() => toLogin()}>Đăng Nhập</a>
                    </div>
                }
            </div>
        </div>
    );
}

export default MobileMenu;
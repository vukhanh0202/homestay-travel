import React from 'react';
import './styles.scss';

function Footer({disable}) {
    return (
        {disable} ? ''
        : 
        <footer className="footer-section">
            <div className="container">
                <div className="footer-text">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ft-about">
                                <div className="logo">
                                    <a>
                                        <img src="img/footer-logo.png" alt="" />
                                    </a>
                                </div>
                                <p>Chúng tôi đã thu hút và đáp ứng hàng triệu khách du lịch thông qua website</p>
                                <div className="fa-social">
                                    <a><i className="fa fa-facebook" /></a>
                                    <a><i className="fa fa-twitter" /></a>
                                    <a><i className="fa fa-tripadvisor" /></a>
                                    <a><i className="fa fa-instagram" /></a>
                                    <a><i className="fa fa-youtube-play" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="ft-contact">
                                <h6>Thông Tin Liên Hệ</h6>
                                <ul>
                                    <li>(84) 858 8100 938</li>
                                    <li>ktpm2018@uit.edu.vn</li>
                                    <li>ĐH UIT, khu phố 6, phường Linh Trung, quận Thủ Đức, TP.HCM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="ft-newslatter">
                                <h6>Thêm Thông Tin</h6>
                                <p>Nhận ngay ưu đãi và cập nhật mới nhất.</p>
                                <form action="#" className="fn-form">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit"><i className="fa fa-send" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <ul>
                                <li><a >Liên Lạc</a></li>
                                <li><a >Điều Khoản Sử Dụng</a></li>
                                <li><a>Chính Sách</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="co-text">
                                <p>
                                    Copyright © All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
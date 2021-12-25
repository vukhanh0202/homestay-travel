import { message } from 'antd';
import React, {useState} from 'react';
import './styles.scss';

function Footer({ disable }) {
    const [valueInput, setValueInput] = useState('');
    const messageSuccess = () => {
        // const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // if (regex.test(this.state.email) === false);
        if (valueInput !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(valueInput)) {
                message.error("Địa chỉ Email không phù hợp");
            }else{
                message.success("Thêm địa chỉ Email thành công");
                setValueInput('')
            }
        }
    }
    return (
        <footer className={`footer-section ${disable ? 'disable' : ''}`}>
            <div className="container">
                <div className="footer-text">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ft-about">
                                <div className="logo">
                                    <a href>
                                        <img src="img/footer-logo.png" alt="" />
                                    </a>
                                </div>
                                <p>Chúng tôi đã thu hút và đáp ứng hàng triệu khách du lịch thông qua website</p>
                                <div className="fa-social">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a>
                                    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-tripadvisor" /></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a>
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
                                <div className="fn-form">
                                    <input value={valueInput} onInput={e => setValueInput(e.target.value)} type="text" placeholder="Email" />
                                    <button onClick={() => messageSuccess()}><i className="fa fa-send" /></button>
                                </div>
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
                                <li><a href>Liên Lạc</a></li>
                                <li><a href>Điều Khoản Sử Dụng</a></li>
                                <li><a href>Chính Sách</a></li>
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
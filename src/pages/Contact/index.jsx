import { message } from 'antd';
import React from 'react';
import './styles.scss';

function Contact() {
    const submitInfo = () => {
        message.success("Gửi thông tin thành công!");
    }
    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-text">
                            <h2>Thông tin liên lạc</h2>
                            <p>Website cho thuê homestay với chất lượng uy tín, hàng đầu.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="c-o">Địa chỉ:</td>
                                        <td>ĐH CNTT, Linh Trung, Thủ Đức, TP.HCM</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">SĐT</td>
                                        <td>(84) 858 8100 938</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">Email:</td>
                                        <td>ktpm2018@uit.edu.vn</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <form action="#" className="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Họ Và tên" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="col-lg-12">
                                    <textarea placeholder="Tin Nhắn" defaultValue={""} />
                                    <button  onClick={() => submitInfo()} type="submit">Gửi thông tin</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="map">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2324288146738!2d106.80161941462345!3d10.869918392258095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiDEkEhRRyBUUC5IQ00!5e0!3m2!1svi!2s!4v1625150752441!5m2!1svi!2s" height={470} style={{ border: 0 }} allowFullScreen />
                </div>
            </div>
        </section>
    );
}

export default Contact;
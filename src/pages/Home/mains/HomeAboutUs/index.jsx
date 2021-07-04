import React from 'react';
import Images from '../../../../constants/images';
import './styles.scss';
import { useHistory } from 'react-router-dom';

function HomeAboutUs() {
    const history = useHistory()
    const onList = () => {
        history.push(`/danh-sach`);
    }
    return (
        <section className="aboutus-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <div className="section-title">
                                <span>Về Chúng Tôi</span>
                                <h2>Luxury Homestay VN <br />Travel Homestay</h2>
                            </div>
                            <p className="f-para">Homestay Travel là một nền tảng kết nối giữa chủ nhà và người thuê nhà (Home-Sharing).
                                Thông qua Homestay Travel du khách có nhu cầu thuê phòng trọ sẽ liên hệ với những chủ nhà tại địa phương.</p>
                            <p className="s-para">Các chủ nhà thông qua các căn hộ của mình có thể cho thuê ngắn hạn kiếm tiền một cách dễ dàng. Còn du khách sẽ
                                được trải nghiệm dịch vụ căn hộ thoải mái và thuận tiện nhất.</p>
                            <a onClick={() => onList()} href="#" className="primary-btn about-btn">Đặt Phòng Ngay</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-pic">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src={Images.ABOUT_1} alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <img src={Images.ABOUT_2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAboutUs;
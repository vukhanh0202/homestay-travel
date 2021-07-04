import 'antd/dist/antd.css';
import React from 'react';
import Images from '../../../../constants/images';
import './styles.scss';


function Banking(props) {
    return (
        <div className="method-banking-wrapper">
            <h5 className="text-center">THÔNG TIN THANH TOÁN CHUYỂN KHOẢN NGÂN HÀNG</h5>
            <div className="row content">
                <div className="col-4">
                    <div className="method-payment">
                        <img src={Images.INTERNET_BANKING} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="method-form">
                        <p className="title">
                            Thông tin người gửi
                        </p>
                        <div className="form-item">
                            <span className="form-item__title">
                                Họ và tên
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item">
                                {props.payment.fullname}
                            </span>
                        </div>
                        <div className="form-item">
                            <span className="form-item__title">
                                Số điện thoại
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item">
                                {props.payment.phone}
                            </span>
                        </div>
                        <div className="form-item">
                            <span className="form-item__title">
                                Email
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item">
                                {props.payment.email}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="method-form">
                        <p className="title">
                            Thông tin người nhận
                        </p>
                        <div className="form-item">
                            <span className="form-item__title">
                                Số tài khoản người nhận
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item__content">
                                0651000853526
                            </span>
                        </div>
                        <div className="form-item">
                            <span className="form-item__title">
                                Ngân hàng người nhận
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item__content">
                                ACB
                            </span>
                        </div>
                        <div className="form-item">
                            <span className="form-item__title">
                                Họ và tên người nhận
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item__content">
                                Nguyễn Hoài Phong
                            </span>
                        </div>
                        <div className="form-item">
                            <span className="form-item__title">
                                Khuyến mãi
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item__content">
                                {props.payment.reward}%
                            </span>
                        </div>
                        <div className="form-item">
                            <span className="form-item__title">
                                Tổng tiền phải thành toán
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item__content" style={{ fontStyle: 'italic', fontWeight: 600, color: '#01bbbc' }}>
                                {(props.payment.price * (100 - props.payment.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                            </span>
                        </div>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <a onClick={() => props.setCurrent(2)} className="bk-btn">Xác Nhận</a>
                </div>
            </div>
        </div>
    );
}

export default Banking;
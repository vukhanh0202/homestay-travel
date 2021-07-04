import 'antd/dist/antd.css';
import React from 'react';
import Images from '../../../../constants/images';
import './styles.scss';

function Momo(props) {
    return (
        <div className="method-momo-wrapper">
            <h5 className="text-center">THÔNG TIN THANH TOÁN MOMO</h5>
            <div className="row content">
                <div className="colcol-4">
                    <div className="method-payment">
                        <img src={Images.MOMO} />
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
                                Nguyễn Vũ Khánh
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
                                0858100938
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
                                nguyenvukhanh0202@gmail.com
                            </span>
                        </div>
                        <div className="form-item">
                            <span className="form-item__title">
                                Nội Dung
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item">
                                03072021
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
                                Số điện thoại người nhận
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item__content">
                                091823136
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
                                Tổng tiền phải thành toán
                            </span>
                            <span>
                                &nbsp;: &nbsp;
                            </span>
                            <span className="form-item__content">
                                400.000đ
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

export default Momo;
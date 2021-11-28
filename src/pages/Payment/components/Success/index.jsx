import 'antd/dist/antd.css';
import React from 'react';
import Images from '../../../../constants/images';
import './styles.scss';

function Success() {
    const backhome = () => {
        window.location.pathname = "/";
    }
    return (
        <div className="text-center success">
            <img alt="" src={Images.SUCCESS} width='100px' />
            <h4>Bạn đã thanh toán đặt phòng thành công</h4>
            <h5>Thông tin hóa đơn đã được gửi vào email của bạn</h5>
            <a href className="bk-btn" onClick={()=> backhome()}>Về Trang Chủ</a>
        </div>

    );
}

export default Success;
import 'antd/dist/antd.css';
import React from 'react';
import Images from '../../../../constants/images';
import './styles.scss';


function Success() {
    return (
        <div className="text-center success">
            <img src={Images.SUCCESS} width='100px' alt="" />
            <h4>Bạn đã thanh toán đặt phòng thành công</h4>
            <h5>Thông tin hóa đơn đã được gửi vào email của bạn</h5>
        </div>

    );
}

export default Success;
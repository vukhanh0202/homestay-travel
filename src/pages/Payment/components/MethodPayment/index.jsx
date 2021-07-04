import { Steps } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import Images from '../../../../constants/images';
import './styles.scss';

const { Step } = Steps;


function MethodPayment(props) {
    const onSelectMethodMomo = () => {
        props.onSelectMethod({
            current: 1,
            method: "MOMO"
        })
    }
    const onSelectMethodBanking = () => {
        props.onSelectMethod({
            current: 1,
            method: "BANKING"
        })
    }
    return (
        <div className="method-payment-wrapper">
            <h5 className="text-center">VUI LÒNG CHỌN PHƯƠNG THỨC BẠN MUỐN SỬ DỤNG ĐỂ THANH TOÁN</h5>
            <div className="row content">
                <div className="col-12 col-lg-6 ">
                    <div className="method-payment">
                        <img src={Images.MOMO} onClick={() => onSelectMethodMomo()} />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="method-payment">
                        <img src={Images.INTERNET_BANKING} onClick={() => onSelectMethodBanking()} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MethodPayment;
import {
    TagsOutlined, SendOutlined
} from '@ant-design/icons';
import { Form, Input, Upload } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import Images from '../../../../constants/images';
import './styles.scss';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function WaitingConfirm(props) {
    const [content, setContent] = useState([
        {
            class: 'chat-receive',
            message: "Nếu có thắc mắc gì trong quá trình thanh toán bạn có thể liên lạc trực tiếp với quản trị viên thông qua khung chat. Nhấn nút hoàn thành hoặc chat DONE để xác nhận"
        }
    ]);
    const [messages, setMessages] = useState();
    const [fileList, setFileList] = useState();
    const [timeElement, setTimeElement] = useState({
        minute: 15,
        second: 0
    });
    const [time, setTime] = useState(900);
    const [form] = Form.useForm();
    const send = () => {
        const dataForm = form.getFieldValue();
        setContent([...content, {
            class: 'chat-send',
            message: dataForm.message
        }]);
        if (dataForm.message === 'DONE') {
            props.setCurrent(3);
        }
        form.setFieldsValue({
            message: null
        })

    }
    const confirmDone = () => {
        props.setCurrent(3);
    }
    useEffect(() => {
        const intervalID = setTimeout(() => {
            const temp = time - 1;
            const minute = Math.floor(temp / 60);
            const second = temp % 60;
            setTime(temp);
            setTimeElement({
                minute: minute,
                second: second
            })
        }, 1000);
        return () => clearInterval(intervalID);
    });
    useEffect(() => {
        setMessages(content.map((item, index) => {
            if (item.link !== undefined) {
                return <div key={index} className={item.class} style={{ backgroundColor: 'transparent' }}>
                    <img alt="" src={item.link} width='150px' height='auto' />
                </div>
            } else {
                return <div key={index} className={item.class}>
                    {item.message}
                </div>
            }
        }))

    }, [content]);

    const handleChange = async ({ fileList }) => {
        if (!fileList[0].url && !fileList[0].preview) {
            fileList[0].preview = await getBase64(fileList[0].originFileObj);
        }
        setContent([...content, {
            class: 'chat-send',
            link: fileList[0].url || fileList[0].preview
        }]);
        setFileList(null);
    }
    return (
        <div className="waiting-confirm-wrapper">
            <div className="row">
                <div className="col-12 col-lg-8 infomation">
                    <div className="total-price">
                        <div className="total-price__title">
                            Số tiền phải thanh toán
                        </div>
                        <div className="total-price__sub">
                            {(props.payment.price * (100 - props.payment.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                        </div>
                    </div>
                    <div className="detail-payment row">
                        <div className="detail-payment__img col-4">
                            {props.method === 'MOMO' ? <img src={Images.MOMO} alt="" /> : <img src={Images.INTERNET_BANKING} alt="" />}
                        </div>
                        <div className="detail-payment__info col-8">
                            <p className="detail-title">
                                Thông tin người gửi
                            </p>
                            <div className="form-item">
                                <span className="form-item__title">
                                    Tên
                                </span>
                                <span>
                                    &nbsp;: &nbsp;
                                </span>
                                <span className="form-item__content">
                                    {props.payment.fullname}
                                </span>
                            </div>
                            <div className="form-item">
                                <span className="form-item__title">
                                    SĐT
                                </span>
                                <span>
                                    &nbsp;: &nbsp;
                                </span>
                                <span className="form-item__content">
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
                                <span className="form-item__content">
                                    {props.payment.email}
                                </span>
                            </div>
                            <div className="separator">
                            </div>
                            <p className="detail-title">
                                Thông tin người nhận
                            </p>
                            {/* Payment momo */}
                            {props.method === 'MOMO' ?
                                <>
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
                                        <span className="form-item__content">
                                            {(props.payment.price * (100 - props.payment.reward) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                                        </span>
                                    </div>
                                </>
                                :
                                <>
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
                                </>
                            }
                        </div>
                    </div>
                    <div className="realise">
                        <div className="realise__title">
                            Thanh toán này sẽ được hoàn thành trong: <span className="minute">{timeElement.minute}:{timeElement.second}</span>
                        </div>
                        <div className="realise__sub">
                            (Thanh toán dự tính trong vòng 15 phút. Nếu hết thời gian thanh toán vẫn chưa được xác nhận
                            bạn có thể khiếu nại cho quản trị viên)
                        </div>
                        <a href className="bk-btn" onClick={()=> confirmDone()}>Hoàn Thành</a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 ">
                    <div className="chat-wrapper">
                        <div className="people-name">
                            <div className="name">
                                ADMIN
                            </div>
                            <div className="email">
                                ktpm2018@uit.edu.vn
                            </div>
                        </div>
                        <div className="chat-content">
                            {messages}
                        </div>
                        <div className="input-message">
                            <Form form={form} onFinish={send} className="form-message">
                                <div className="form-group">
                                    <Form.Item className="message" name="message" rules={[{ required: true, message: 'Vui lòng nhập nội dung !' }]}>
                                        <Input autoComplete={'off'} type="text" className="form-group-input" placeholder="Nhập tin nhắn tại đây..."
                                            suffix={
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Upload className="icon"
                                                        fileList={fileList}
                                                        onChange={handleChange}>
                                                        <TagsOutlined className="icon" />
                                                    </Upload>
                                                    <SendOutlined className="icon" onClick={() => send()} />
                                                </div>
                                            }
                                        />
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default WaitingConfirm;
import { DatePicker, Form, Input, message } from 'antd';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import Modal from 'antd/lib/modal/Modal';


function FormBooking({ item }) {
    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();
    const [date, setDate] = useState();
    const LogIn = localStorage.getItem('LOGIN');
    const [form] = Form.useForm();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (checkOut && checkIn)
            setDate(checkOut - checkIn);
    }, [checkIn, checkOut])
    useEffect(() => {
        if (LogIn) {
            form.setFieldsValue({
                fullname: 'Nguyễn Vũ Khánh',
                email: 'khanh@uit.edu.vn',
                phone: '0858123823'
            })
        }
        // eslint-disable-next-line
    }, [])
    const booking = () => {
        const dataForm = form.getFieldValue();
        dataForm.date = Math.floor(date / 86400000);
        localStorage.setItem('PAYMENT', JSON.stringify(
            {
                fullname: dataForm.fullname,
                email: dataForm.email,
                phone: dataForm.phone,
                reward: item.reward + 10,
                price: (item.price * dataForm.date)
            }
        ));
        setIsVisible(true);
    }
    function onChangeCheckIn(date, dateString) {
        setCheckIn(date);
        form.setFieldsValue({
            checkout: null
        })
    }
    function onChangeCheckOut(date, dateString) {
        setCheckOut(date);
    }
    function disabledDateCheckIn(current) {
        let customDate = new Date();
        return current && current <= customDate;
    }
    function disabledDateCheckOut(current) {
        let customDate = checkIn;
        return current && current <= customDate;
    }
    const history = useHistory()

    const handleOk = () => {
        history.push('/thanh-toan')
    }

    const handleCancel = () => {
        setIsVisible(false);
        message.success("Đặt phòng thành công")
    }

    return (
        <div className="booking-form">
            <Modal className='popup' title="Xác nhận" visible={isVisible} onOk={handleOk} onCancel={handleCancel} cancelText="Chỉ đặt phòng" okText="Thanh toán">
                <p>Tổng số tiền phòng của bạn là: <span style={{ fontWeight: 600, fontSize: '1.2rem', color: '#dfa974' }}>{(((100 - item.reward) / 100) * item.price * Math.floor(date / 86400000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span></p>
                <p style={{ fontWeight: 600 }}>Thanh toán ngay để được giảm giá <span style={{ fontSize: '1.2rem', color: '#dfa974' }}>10%</span></p>
            </Modal>
            <h3>Đặt Phòng</h3>
            <Form form={form} onFinish={booking} className="form-booking">
                <div className="check-date">
                    <label htmlFor="date-in">Ngày vào:</label>
                    <div className='pick-date'>
                        <Form.Item className="message" name="checkin" rules={[{ required: true, message: 'Vui lòng chọn ngày vào !' }]}>
                            <DatePicker disabledDate={disabledDateCheckIn} onChange={onChangeCheckIn} placeholder="" />
                        </Form.Item>
                    </div>
                </div>
                <div className="check-date">
                    <label htmlFor="date-out">Ngày ra:</label>
                    <div className='pick-date'>
                        <Form.Item className="message" name="checkout" rules={[{ required: true, message: 'Vui lòng chọn ngày ra !' }]}>
                            <DatePicker disabledDate={disabledDateCheckOut} onChange={onChangeCheckOut} placeholder="" />
                        </Form.Item>
                    </div>
                </div>
                <div className="check-date">
                    <label >Tên:</label>
                    <div className='pick-date'>
                        <Form.Item className="message" name="fullname" rules={[{ required: true, message: 'Vui lòng nhập tên !' }]}>
                            <Input autoComplete={'off'} type="text" className="date-input"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="check-date">
                    <label htmlFor="room">Email:</label>
                    <div className='pick-date'>
                        <Form.Item className="message" name="email" rules={[{ required: true, message: 'Vui lòng nhập email !' }]}>
                            <Input autoComplete={'off'} type="text" className="date-input"
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="check-date">
                    <label >Số điện thoại:</label>
                    <div className='pick-date'>
                        <Form.Item className="message" name="phone" rules={[{ required: true, message: 'Vui lòng nhập SĐT !' }]}>
                            <Input autoComplete={'off'} type="text" className="date-input"
                            />
                        </Form.Item>
                    </div>
                </div>
                <button type="submit">Đặt phòng</button>
            </Form>
        </div>
    );
}
export default FormBooking;
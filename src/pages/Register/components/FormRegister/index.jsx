import { Form, Input, message } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './styles.scss';

function FormRegister() {
    const location = useLocation();
    const [form] = Form.useForm();
    const history = useHistory()
    const toLogin = () => {
        history.push({
            pathname: '/dang-nhap',
            search: `?id=${location.search.slice(4)}`,
        })
    }
    const onFinish = (values) => {
        message.success("Đăng Ký Thành Công");
        history.push({
            pathname: '/dang-nhap',
            search: `?id=${location.search.slice(4)}`,
        })
    };

    return (
        <Form form={form} onFinish={onFinish} className="form-signup">
            <div className="form-signup-text">
                <h3>Đăng ký</h3>
                <p>Đăng tý tài khoản để sử dụng được nhiều chức năng trên website hơn !</p>
            </div>
            <div className="form-signup-group">
                <label>Tài khoản</label>
                <Form.Item name="username" rules={[{ required: true, message: 'Vui lòng nhập tài khoản !' }]}>
                    <Input type="text" className="form-signup-group-control" placeholder="Tài khoản" />
                </Form.Item>
            </div>
            <div className="form-signup-group">
                <label>Mật khẩu</label>

                <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu !' }]}>
                    <Input type="password" className="form-signup-group-control" placeholder="Mật khẩu" />
                </Form.Item>
            </div>
            <div className="form-signup-group">
                <label>Nhập lại mật khẩu</label>
                <Form.Item name="rePassword" rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu !' }]}>
                    <Input type="password" className="form-signup-group-control" placeholder="Nhập lại mật khẩu" />
                </Form.Item>
            </div>
            <div className="form-signup-group">
                <label>Họ và tên</label>
                <Form.Item name="fullname" rules={[{ required: true, message: 'Vui lòng nhập họ và tên !' }]}>
                    <Input type="text" className="form-signup-group-control" placeholder="Nhập họ và tên" />
                </Form.Item>
            </div>
            <div className="form-signup-group">
                <label>Email</label>
                <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email !' }]}>
                    <Input type="text" className="form-signup-group-control" placeholder="Nhập email" />
                </Form.Item>
            </div>
            <div className="form-signup-group">
                <label>Số điện thoại</label>
                <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại !' }]}>
                    <Input type="text" className="form-signup-group-control" placeholder="Nhập số điện thoại" />
                </Form.Item>
            </div>
            <button type="submit" className="form-signup-btn-submit">Đăng ký</button>
            <div className="auth-seperator">
                <span>
                    OR
                </span>
            </div>
            <p className="text-end">
                Bạn đã có tài khoản?
                <a href onClick={() => toLogin()}> Đăng nhập</a>
            </p>
        </Form>
    );
}

export default FormRegister;
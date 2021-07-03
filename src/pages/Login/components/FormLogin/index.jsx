import React from 'react';
import './styles.scss';
import { Form } from 'antd';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

function FormLogin() {

    const [form] = Form.useForm();
    const history = useHistory()
    const toRegister = () => {
        history.push(`/dang-ky`);
    }

    const onFinish = (values) => {      
    };

    return (
        <Form form={form} className="form-login" onFinish={onFinish}>
            <div className="form-login-text">
                <h3>Đăng Nhập</h3>
            </div>
            <div className="form-login-group">
                <label>Tài khoản</label>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input type="text" className="form-login-group-control" placeholder="Tài khoản" name="username" />
                </Form.Item>
            </div>
            <div className="form-login-group">
                <label>Mật khẩu</label>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input type="password" className="form-login-group-control" placeholder="Mật khẩu" name="password" />
                </Form.Item>
            </div>
            <button type="submit" className="form-login-btn-submit">Đăng nhập</button>
            <div className="auth-seperator">
                <span>
                    OR
                </span>
            </div>
            <p className="text-end">
                Bạn chưa có tài khoản?
                <a onClick={() => toRegister()}> Tạo ngay </a>
            </p>
        </Form>
    );
}

export default FormLogin;
import { Form, Input, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './styles.scss';
function FormLogin() {
    const location = useLocation();
    const [form] = Form.useForm();
    const history = useHistory()
    const toRegister = () => {
        history.push(`/dang-ky`);
    }

    const onFinish = (values) => {
        if (values.username === 'user' && values.password === '123') {
            localStorage.setItem('LOGIN', true);
            if (location.search !== "" && location.search.slice(4) !== "") {
                history.push(`/chi-tiet/${location.search.slice(4)}`);
            } else {
                history.push("/trang-chu");
            }
        } else {
            message.error("Sai tài khoản hoặc mật khẩu");
        }
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
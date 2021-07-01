import { Col, Row } from "antd";
import React from 'react';
import './styles.scss';
import FormLogin from "./components/FormLogin";
import CarouselLogin from "./components/CarouselForm";


function Login() {
    return (
            <div className="row">
                <div className="col-5"><FormLogin /></div>
                <div className="col-7"><CarouselLogin /></div>
            </div>
    );
}

export default Login;
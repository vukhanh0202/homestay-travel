import React from 'react';
import './styles.scss';
import FormLogin from "./components/FormLogin";
import CarouselLogin from "./components/CarouselForm";


function Login() {
    return (
        <div className="row">
            <div className="col-lg-5" style={{ padding: '5rem 2rem', height:'85.5vh' }}><FormLogin /></div>
            <div className="col-lg-7"><CarouselLogin /></div>
        </div>
    );
}

export default Login;
import React from 'react';
import './styles.scss';
import FormRegister from "./components/FormRegister";
import CarouselLogin from "./../Login/components/CarouselForm";


function Register() {
    return (
        <div className="row">
            <div className="col-lg-5" style={{ padding: '0 2rem' }}><FormRegister /></div>
            <div className="col-lg-7"><CarouselLogin /></div>
        </div>
    );
}

export default Register;
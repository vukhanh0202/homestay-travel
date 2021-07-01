import React from 'react';
import './styles.scss';
import FormRegister from "./components/FormRegister";
import CarouselLogin from "./../Login/components/CarouselForm";


function Register() {
    return (
            <div className="row">
                <div className="col-5"><FormRegister /></div>
                <div className="col-7"><CarouselLogin /></div>
            </div>
    );
}

export default Register;
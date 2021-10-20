import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function WrapperContent(props) {
    return (
        <div>
            <Header disableTop={props.disableTop} />
            {/* <PreLoader /> */}
            {props.children}
            <Footer disable={props.disableBottom} />
        </div>
    )
}

export default WrapperContent

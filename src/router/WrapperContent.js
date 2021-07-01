import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PreLoader from '../components/PreLoader';

function WrapperContent(props) {
    return (
            <div>
                <Header disableTop={props.disableTop}/>
                {/* <PreLoader /> */}
                {props.children}
                <Footer disable={props.disableBottom}/>
            </div>
    )
}

export default WrapperContent

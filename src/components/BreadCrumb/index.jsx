import React from 'react';
import './styles.scss';

function BreadCrumb(props) {
    const elemts = props.prop.breadcrumb.map((item, index) => {
        return <a key={index}>{item.name}</a>
    })
    return (
        <div className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <h2>{props.prop.title}</h2>
                            <div className="bt-option">
                                {elemts}
                                <span>{props.prop.current}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
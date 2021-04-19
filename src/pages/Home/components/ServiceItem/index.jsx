import $ from 'jquery';
import React, { useEffect } from 'react';
import './styles.scss';
import Select from 'react-select';

function ServiceItem(props) {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="service-item">
                <i className={props.class} />
                <h4>Travel Plan</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna.</p>
            </div>
        </div>
    );
}

export default ServiceItem;
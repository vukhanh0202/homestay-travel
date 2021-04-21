import React, { useState } from 'react';
import ServiceItem from './../../components/ServiceItem/index';
import './styles.scss';


HomeService.propTypes = {

};

function HomeService() {
    const [items, setItems] = useState(['flaticon-036-parking', 'flaticon-033-dinner',
        'flaticon-026-bed', 'flaticon-024-towel', 'flaticon-044-clock-1', 'flaticon-012-cocktail']);
    const elemt = items.map((item, index) => {
        return <ServiceItem class={item} key={index} />
    })
    return (
        <section className="services-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>What We Do</span>
                            <h2>Discover Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {elemt}
                </div>
            </div>
        </section>
    );
}

export default HomeService;
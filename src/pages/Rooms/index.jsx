import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import RoomItem from './components/RoomItem';
import './styles.scss';

Rooms.propTypes = {

};

function Rooms(props) {
    const elemt = props.apartments.map((item, index) => {
        return <div key={index} className="col-lg-4 col-md-6">
            <RoomItem item={item} />
        </div>
    })
    return (
        <div>
            <BreadCrumb prop={props.breadcrumbs} />
            <section className="rooms-section spad">
                <div className="container">
                    <div className="row">
                        {elemt}
                        <div className="col-lg-12">
                            <div className="room-pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">Next <i className="fa fa-long-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Rooms;
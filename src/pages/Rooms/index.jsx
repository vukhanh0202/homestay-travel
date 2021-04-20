import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Images from '../../constants/images';
import RoomItem from './components/RoomItem';
import './styles.scss';

Rooms.propTypes = {

};

function Rooms(props) {
    const [items, setItems] = useState([
        {
            title: 'Premium King Room',
            price: '198$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_1
        },
        {
            title: 'Deluxe Room',
            price: '198$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_2
        },
        {
            title: 'Double Room',
            price: '198$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_3
        },
        {
            title: 'Luxury Room',
            price: '198$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_4
        },
        {
            title: 'Room With View',
            price: '198$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_5
        },
        {
            title: 'Small View',
            price: '198$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_6
        },
    ]);
    const [breadcrumb, setBreadCrumb] = useState({
        title: 'Our Rooms',
        breadcrumb: [
            {
                name: 'Home',
            }
        ],
        current: 'Rooms'
    });
    const elemt = items.map((item, index) => {
        return <div key={index} className="col-lg-4 col-md-6">
            <RoomItem item={item} />
        </div>
    })
    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
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
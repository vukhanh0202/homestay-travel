import React, { useState } from 'react';
import Images from '../../../../constants/images';
import RoomItem from '../../components/RoomItem';
import './styles.scss';


HomeRoom.propTypes = {

};

function HomeRoom() {
    const [items, setItems] = useState([
        {
            typeRoom: 'Double Room',
            price: '199$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_B1
        },
        {
            typeRoom: 'Premium King Room',
            price: '159$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_B2
        },
        {
            typeRoom: 'Deluxe Room',
            price: '198$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_B3
        },
        {
            typeRoom: 'Family Room',
            price: '299$',
            size: '30 ft',
            capacity: 'Max person 5',
            bed: 'King Bed',
            service: 'Wifi, Television, Bathroom,...',
            img: Images.ROOM_B4
        },
    ]);
    const elemt = items.map((item, index) => {
        return <RoomItem item={item} key={index} />
    })
    return (
        <section className="hp-room-section">
            <div className="container-fluid">
                <div className="hp-room-items">
                    <div className="row">
                        {elemt}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeRoom;
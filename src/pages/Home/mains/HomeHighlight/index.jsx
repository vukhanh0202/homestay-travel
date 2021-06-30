import React, { useRef, useState } from 'react';
import './styles.scss';
import Slider from "react-slick";
import Thumbnail from './components/Thumbnail';

function HomeHighlight() {

    const slide = useRef(null);
    const [list, setList] = useState([
        {
            id: 1,
            img: "https://cdn.luxstay.com/home/location/location_1_1559734709.png",
            address: "Hà Nội",
            number: "2897"
        },
        {
            id: 2,
            img: "https://cdn.luxstay.com/home/location/location_5_1559735011.png",
            address: "TP. Hồ Chí Minh",
            number: "2315"
        },
        {
            id: 3,
            img: "https://cdn.luxstay.com/home/location/location_10_1559303118.png",
            address: "Vũng Tàu",
            number: "533"
        },
        {
            id: 4,
            img: "https://cdn.luxstay.com/home/location/location_4_1559786177.png",
            address: "Đà Lạt",
            number: "1484"
        }
        ,
        {
            id: 5,
            img: "https://cdn.luxstay.com/home/location/location_16_1559303173.png",
            address: "Đà Nẵng",
            number: "906"
        }
    ]
    )
    return (
        <section className="section-highlight">
            <div className="container">
                <div className="title-wrapper">
                    <h3 className="title">Địa Điểm Nổi Bật</h3>
                    <p className="sub-title">Cùng Homestay Travel bắt đầu chuyến hành trình chinh phục thế giới của bạn</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {list.map(item => {
                        return (<div key={item?.id} className="item col-2">
                            <Thumbnail list={item} />
                        </div>);
                    })}
                </div>
            </div>
        </section>
    );
}

export default HomeHighlight;
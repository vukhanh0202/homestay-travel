import React, { useRef, useState } from 'react';
import './styles.scss';
import Slider from "react-slick";
import Thumbnail from './components/Thumbnail';
import ThumbnailToday from './components/Thumbnail';
import { Apartment } from '../../../../constants/Apartment';
import { useHistory } from 'react-router-dom';

function HomeToday() {

    const list = Apartment.slice(0, 8);
    const history = useHistory()
    const toDetailHome = () => {
        history.push(`/chi-tiet/${123}`);
    }
    return (
        <section className="section-today">
            <div className="container">
                <div className="title-wrapper">
                    <h3 className="title">Homestay hấp dẫn hôm nay</h3>
                    <p className="sub-title">Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên</p>
                </div>
                <div className="row">
                    {list.map((item, key) => {
                        return (<div key={key} className="item col-3" onClick>
                            <ThumbnailToday item={item} onClick={() => toDetailHome()} />
                        </div>);
                    })}
                </div>
            </div>
        </section>
    );
}

export default HomeToday;
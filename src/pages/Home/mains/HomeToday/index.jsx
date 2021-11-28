import React from 'react';
import './styles.scss';
import ThumbnailToday from './../../../../components/Thumnail';
import { Apartment } from '../../../../constants/Apartment';


function HomeToday() {

    const list = Apartment.slice(0, 8);
    const LogIn = localStorage.getItem('LOGIN');
    return (
        <section className="section-today">
            <div className="container">
                <div className="title-wrapper">
                    <h3 className="title">Homestay hấp dẫn hôm nay</h3>
                    <p className="sub-title">Để mỗi chuyến đi là một hành trình truyền cảm hứng, mỗi căn phòng là một khoảng trời an yên</p>
                </div>
                <div className="row">
                    {list.map((item, key) => {
                        return (<div key={key} className="item col-6 col-lg-3">
                            <ThumbnailToday item={item} isLogin={LogIn}/>
                        </div>);
                    })}
                </div>
            </div>
        </section>
    );
}

export default HomeToday;
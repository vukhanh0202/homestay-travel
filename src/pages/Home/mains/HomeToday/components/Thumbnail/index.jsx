import React from 'react';
import './styles.scss';

function ThumbnailToday({ item }) {
    return (
        <div className="thumnail-today">
            <div className="img-wrapper">
                <img className="thumnail-home_item__image" width='100%' height='192px'
                    src={item?.img} />
            </div>
            <div className="content-wrapper">
                <div className="content-type">
                    {item?.type} - {item?.bedroom}
                </div>
                <div className="content-name">
                    <div className="name">{item?.title}</div>
                    <div className="price">{item?.price} ₫/đêm</div>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailToday;
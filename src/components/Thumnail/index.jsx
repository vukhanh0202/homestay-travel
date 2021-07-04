import React, { useState } from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

function ThumbnailToday({ item }) {

    const history = useHistory()
    const toDetailHome = () => {
        history.push(`/chi-tiet/${item.id}`, item);
    }
    const [isFavorite, setIsFavorite] = useState(item.favourite);

    const setFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    return (
        <div className="thumnail-today" >
            <div className="img-wrapper" onClick={() => toDetailHome()}>
                <img className="thumnail-home_item__image" width='100%' height='192px'
                    src={item?.img} />
            </div>
            <div className="content-wrapper">
                <div className="content">
                    <div className="content-type" onClick={() => toDetailHome()}>
                        {item?.type} - {item?.bedroom}
                    </div>
                    <div className="content-name">
                        <div className="name">{item?.title}</div>
                        <div className="price-wrapper row">
                            <div className="price col-7" onClick={() => toDetailHome()}>
                                {item?.price} ₫/đêm
                            </div>
                            <div class="listing-controls col-5" onClick={() => setFavorite()}>
                                <a class={isFavorite ? "favorite" : "un-favorite"}>
                                    <i class="far fa-heart"></i>
                                </a>
                                Yêu thích
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ThumbnailToday;
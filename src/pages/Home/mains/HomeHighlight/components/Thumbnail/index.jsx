import React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

function Thumbnail({ list }) {

    const history = useHistory()
    const toListHome = () => {
        history.push(`/danh-sach`);
    }
    return (
        <div className="thumnail-home_item" onClick={() => toListHome()}>
            <div className="thumnail-home_item__cover">
                <img alt="" className="thumnail-home_item__image"
                    src={list?.img} />
            </div>
            <div className="thumnail-home_item__content is-absolute white-deep">
                <div className="thumnail-home_item__title extra-bold">{list?.address}</div>
                <span className="thumnail-home_item__price d-block">
                    <b>{list?.number}</b> Chỗ ở
                </span>
            </div>
        </div>
    );
}

export default Thumbnail;
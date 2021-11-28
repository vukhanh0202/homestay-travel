import React, { useState } from 'react';
import {  message} from 'antd';
import './styles.scss';


function Heart({ item, isLogin, favouriteList }) {

    const [isFavorite, setIsFavorite] = useState(item.favourite);
    const [isfavouriteList, setIsfavouriteList] = useState(favouriteList);
    const LogIn = localStorage.getItem('LOGIN');
    function info() {
        message.info('Vui lòng đăng nhập để sử dụng tính năng này !');
      }
    const setFavorite = () => {
        setIsFavorite(!isFavorite);
        setIsfavouriteList(!isfavouriteList);
    }
    return (
            <div className={(isFavorite && isLogin) || isfavouriteList ? "heart is-active" : "heart"}  
            onClick={ LogIn ? () => setFavorite() : () => info()}>
            </div>
    );
}

export default Heart;
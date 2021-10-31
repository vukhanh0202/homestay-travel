import React, { useState } from 'react';
import './styles.scss';

function Heart({ item }) {

    const [isFavorite, setIsFavorite] = useState(item.favourite);

    const setFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    return (
            <div className={isFavorite ? "heart is-active" : "heart"}  onClick={() => setFavorite()}>
            </div>
    );
}

export default Heart;
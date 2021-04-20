import $ from 'jquery';
import React, { useEffect } from 'react';
import './styles.scss';

GalleryItem.propTypes = {

};

function GalleryItem(props) {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, [])
    return (
        <div className={`gallery-item set-bg ${props.item.classes}`} data-setbg={props.item.img}>
            <div className="gi-text">
                <h3>{props.item.title}</h3>
            </div>
        </div>
    );
}

export default GalleryItem;
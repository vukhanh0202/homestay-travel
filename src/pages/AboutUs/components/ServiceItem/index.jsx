import $ from 'jquery';
import React, { useEffect } from 'react';
import './styles.scss';

ServiceItem.propTypes = {

};

function ServiceItem(props) {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, [])
    return (
        <div className="ap-service-item set-bg" data-setbg={props.item.img}>
            <div className="api-text">
                <h3>{props.item.title}</h3>
            </div>
        </div>);
}

export default ServiceItem;
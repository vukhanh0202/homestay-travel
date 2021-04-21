import $ from 'jquery';
import React, { useEffect } from 'react';
import './styles.scss';

BlogItem.propTypes = {

};

function BlogItem(props) {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, [])
    return (
        <div className="blog-item set-bg" data-setbg={props.item.img}>
            <div className="bi-text">
                <span className="b-tag">{props.item.tag}</span>
                <h4><a href="./blog-details.html">{props.item.title}</a></h4>
                <div className="b-time"><i className="icon_clock_alt" />{props.item.date}</div>
            </div>
        </div>
    );
}

export default BlogItem;
import React, { useState } from 'react';
import Images from '../../../../constants/images';
import BlogItem from '../../components/BlogItem';
import SliderTestimonials from '../../components/SliderTestimonials';
import './styles.scss';

HomeBlog.propTypes = {

};

function HomeBlog() {
    const [items, setItems] = useState([
        {
            tag: 'Travel Trip',
            title: 'Tremblant In Canada',
            date: ' 15th April, 2019',
            img: Images.BLOG_1,
            class: 'col-lg-4'
        },
        {
            tag: 'Camping',
            title: 'Choosing A Static Caravan',
            date: ' 15th April, 2019',
            img: Images.BLOG_2,
            class: 'col-lg-4'
        },
        {
            tag: 'Event',
            title: 'Copper Canyon',
            date: ' 21th April, 2019',
            img: Images.BLOG_3,
            class: 'col-lg-4'
        },
        {
            tag: 'Event',
            title: 'Trip To Iqaluit In Nunavut A Canadian Arctic City',
            date: ' 08th April, 2019',
            img: Images.BLOG_WIDE,
            class: 'col-lg-8'
        },
        {
            tag: 'Travel',
            title: 'Traveling To Barcelona',
            date: ' 12th April, 2019',
            img: Images.BLOG_10,
            class: 'col-lg-4'
        },
    ]);
    const elemt = items.map((item, index) => {
        return <BlogItem item={item} key={index} />
    })
    return (
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Hotel News</span>
                            <h2>Our Blog &amp; Event</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {elemt}
                </div>
            </div>
        </section>);
}

export default HomeBlog;
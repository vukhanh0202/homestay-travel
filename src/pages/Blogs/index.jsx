import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Images from '../../constants/images';
import BlogItem from './components/BlogItem';
import './styles.scss';

Blogs.propTypes = {

};

function Blogs(props) {
    const [items, setItems] = useState([
        {
            title: 'Tremblant In Canada',
            tag: 'TRAVEL TRIP',
            date: ' 15TH APRIL, 2019',
            img: Images.BLOG_1
        },
        {
            title: 'Choosing A Static Caravan',
            tag: 'CAMPING',
            date: ' 15TH APRIL, 2019',
            img: Images.BLOG_2
        },
        {
            title: 'Copper Canyon',
            tag: 'EVENT',
            date: '30 ft',
            img: Images.BLOG_3
        },
        {
            title: 'A Time Travel Postcard',
            tag: 'TRIVAGO',
            date: '22TH APRIL, 2019',
            img: Images.BLOG_4
        },
        {
            title: 'A Time Travel Postcard',
            tag: 'CAMPING',
            date: ' 25TH APRIL, 2019',
            img: Images.BLOG_5
        },
        {
            title: 'Virginia Travel For Kids',
            tag: 'TRAVEL TRIP',
            date: ' 28TH APRIL, 2019',
            img: Images.BLOG_6
        },
        {
            title: 'Bryce Canyon A Stunning',
            tag: 'TRAVEL TRIP',
            date: ' 29TH APRIL, 2019',
            img: Images.BLOG_7
        },
        {
            title: 'Motorhome Or Trailer',
            tag: 'EVENT & TRAVEL',
            date: ' 30TH APRIL, 2019',
            img: Images.BLOG_8
        },
        {
            title: 'Lost In Lagos Portugal',
            tag: 'CAMPING',
            date: ' 30TH APRIL, 2019',
            img: Images.BLOG_9
        },
    ]);
    const [breadcrumb, setBreadCrumb] = useState({
        title: 'Blog',
        breadcrumb: [
            {
                name: 'Home',
            }
        ],
        current: 'Blog Grid'
    });
    const elemt = items.map((item, index) => {
        return <div key={index} className="col-lg-4 col-md-6">
            <BlogItem item={item} />
        </div>
    })
    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <section className="blog-section blog-page spad">
                <div className="container">
                    <div className="row">
                        {elemt}
                        <div className="col-lg-12">
                            <div className="load-more">
                                <a href="#" className="primary-btn">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blogs;
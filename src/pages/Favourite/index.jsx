import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import { Apartment } from '../../constants/Apartment';
import ThumbnailToday from '../../components/Thumnail';
import './styles.scss';
import { List } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

function Favourite(props) {
    const history = useHistory()
    const LogIn = localStorage.getItem('LOGIN');

    useEffect(() => {
        if (!LogIn) {
            history.push('/trang-chu')
        }
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        var element = document.getElementsByClassName("ant-list-items")[0];
        element.classList.add("row");
    }, []);
    // eslint-disable-next-line
    const [breadcrumb, setBreadCrumb] = useState({
        title: 'Danh Sách Yêu Thích',
        breadcrumb: [
            {
                name: 'Trang Chủ',
            }
        ],
        current: 'Danh Sách Yêu Thích'
    });
    const list = Apartment.slice(2, 10);
    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <section className="rooms-section spad">
                <div className="container">
                    <div className="">
                        <List className="grid-home container"
                            pagination={{
                                onChange: page => {
                                    window.scrollTo(0, 0);
                                },
                                pageSize: 12,
                            }}
                            dataSource={list}
                            renderItem={item => (
                                <List.Item className="item col-6 col-lg-3"
                                    key={item.id}
                                >
                                    <ThumbnailToday item={item} favouriteList={true}/>
                                </List.Item>
                            )}
                        >
                        </List>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Favourite;
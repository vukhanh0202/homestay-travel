import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import { Apartment } from '../../constants/Apartment';
import ThumbnailToday from '../../components/Thumnail';
import './styles.scss';
import { List } from 'antd';
import 'antd/dist/antd.css';

function Rooms(props) {

    // eslint-disable-next-line
    const [breadcrumb, setBreadCrumb] = useState({
        title: 'Danh Sách Phòng',
        breadcrumb: [
            {
                name: 'Trang Chủ',
            }
        ],
        current: 'Danh Sách Phòng'
    });
    useEffect(() => {
        var element = document.getElementsByClassName("ant-list-items")[0];
        element.classList.add("row");
    }, []);

    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <section className="rooms-section spad">
                <div className="container">
                    <div className="row">
                        <List className="grid-home container"
                            pagination={{
                                onChange: page => {
                                    window.scrollTo(0, 0);
                                },
                                pageSize: 12,
                            }}
                            dataSource={Apartment.filter(item => item.favourite === true)}
                            renderItem={item => (
                                <List.Item className="item col-6 col-lg-3"
                                    key={item.id}
                                >
                                    <ThumbnailToday item={item} />
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

export default Rooms;
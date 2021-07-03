import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import { Apartment } from '../../constants/Apartment';
import ThumbnailToday from '../../components/Thumnail';
import './styles.scss';
import { List } from 'antd';
import 'antd/dist/antd.css';

function Rooms(props) {

    const [breadcrumb, setBreadCrumb] = useState({
        title: 'Danh Sách Phòng',
        breadcrumb: [
            {
                name: 'Trang Chủ',
            }
        ],
        current: 'Danh Sách Phòng'
    });
    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <section className="rooms-section spad">
                <div className="container">
                    <div className="">
                        <List className="grid-home container"
                            grid={{ gutter: 16, column: 4, row: 3 }}
                            pagination={{
                                onChange: page => {
                                    window.scrollTo(0, 0);
                                },
                                pageSize: 12,
                            }}
                            dataSource={Apartment}
                            renderItem={item => (
                                <List.Item className="item"
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
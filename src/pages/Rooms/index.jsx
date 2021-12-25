import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import { Apartment } from '../../constants/Apartment';
import ThumbnailToday from '../../components/Thumnail';
import './styles.scss';
import { List, Input, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import SelectCustom from '../../components/Select';
import ButtonCustom from '../../components/Button'
function Rooms() {
    const LogIn = localStorage.getItem('LOGIN');
    const [valueInput, setValueInput] = useState('');
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
    const [apartmentList, setApartmentList] = useState(Apartment);
    useEffect(() => {
        var element = document.getElementsByClassName("ant-list-items")[0];
        if (element !== undefined){
            element.classList.add("row");
        }
    }, []);

    const search = () => {
        let number = Math.floor(Math.random() * 10);
        if (number ===0){
            number = 5;
        }
        let arr = Apartment.slice(0, number);
        setApartmentList(arr);
    }

    const clearFilter = () => {
        setApartmentList(Apartment);
    }

    const area = [
        {
            id: 2,
            name: '< 10 m2',
            from: 0,
            to: 30,
        },
        {
            id: 3,
            name: '10 - 30 m2',
            from: 30,
            to: 50,
        },
        {
            id: 4,
            name: '30 - 50 m2',
            from: 50,
            to: 80,
        },
        {
            id: 5,
            name: '> 100 m2',
            from: 80,
            to: 100,
        }
    ]
    const rooms = [
        {
            id: 0,
            name: 'Tất cả',
            from: 0,
            to: 30,
        },
        {
            id: 2,
            name: '1 Phòng ngủ',
            from: 0,
            to: 30,
        },
        {
            id: 3,
            name: '2 Phòng ngủ',
            from: 30,
            to: 50,
        },
        {
            id: 4,
            name: '3 Phòng ngủ',
            from: 50,
            to: 80,
        },
        {
            id: 5,
            name: '4 Phòng ngủ',
            from: 80,
            to: 100,
        },
        {
            id: 5,
            name: '>= 5 Phòng ngủ',
            from: 80,
            to: 100,
        }
    ]
    const prices = [
        {
            id: 0,
            name: 'Tất cả',
            from: 0,
            to: 30,
        },
        {
            id: 2,
            name: '< 100k ₫/đêm',
            from: 0,
            to: 30,
        },
        {
            id: 3,
            name: '100k - 300k ₫/đêm',
            from: 30,
            to: 50,
        },
        {
            id: 4,
            name: '300k - 500k ₫/đêm',
            from: 50,
            to: 80,
        },
        {
            id: 5,
            name: '500k - 1 triệu ₫/đêm',
            from: 80,
            to: 100,
        },
        {
            id: 5,
            name: '> 1 triệu ₫/đêm',
            from: 80,
            to: 100,
        }
    ]

    const city = [
        {
            id: 0,
            name: 'Tất cả',
            from: 0,
            to: 30,
        },
        {
          "name": "Bắc Giang",
          "state_name": "Bắc Giang"
        },
        {
          "name": "Bắc Kạn",
          "state_name": "Bắc Kạn"
        },
        {
          "name": "Cao Bằng",
          "state_name": "Cao Bằng"
        },
        {
          "name": "Hà Giang",
          "state_name": "Hà Giang"
        },
        {
          "name": "Lạng Sơn",
          "state_name": "Lạng Sơn"
        },
        {
          "name": "Phú Thọ",
          "state_name": "Phú Thọ"
        },
        {
          "name": "Quảng Ninh",
          "state_name": "Quảng Ninh"
        },
        {
          "name": "Thái Nguyên",
          "state_name": "Thái Nguyên"
        },
        {
          "name": "Tuyên Quang",
          "state_name": "Tuyên Quang"
        },
        {
          "name": "Lào Cai",
          "state_name": "Lào Cai"
        },
        {
          "name": "Yên Bái",
          "state_name": "Yên Bái"
        },
        {
          "name": "Điện Biên",
          "state_name": "Điện Biên"
        },
        {
          "name": "Hòa Bình",
          "state_name": "Hòa Bình"
        },
        {
          "name": "Lai Châu",
          "state_name": "Lai Châu"
        },
        {
          "name": "Sơn La",
          "state_name": "Sơn La"
        },
        {
          "name": "Bắc Ninh",
          "state_name": "Bắc Ninh"
        },
        {
          "name": "Hà Nam",
          "state_name": "Hà Nam"
        },
        {
          "name": "Hải Dương",
          "state_name": "Hải Dương"
        },
        {
          "name": "Hưng Yên",
          "state_name": "Hưng Yên"
        },
        {
          "name": "Nam Định",
          "state_name": "Nam Định"
        },
        {
          "name": "Ninh Bình",
          "state_name": "Ninh Bình"
        },
        {
          "name": "Thái Bình",
          "state_name": "Thái Bình"
        },
        {
          "name": "Vĩnh Phúc",
          "state_name": "Vĩnh Phúc"
        },
        {
          "name": "Hà Nội",
          "state_name": "Hà Nội"
        },
        {
          "name": "Hải Phòng",
          "state_name": "Hải Phòng"
        },
        {
          "name": "Hà Tĩnh",
          "state_name": "Hà Tĩnh"
        },
        {
          "name": "Nghệ An",
          "state_name": "Nghệ An"
        },
        {
          "name": "Quảng Bình",
          "state_name": "Quảng Bình"
        },
        {
          "name": "Quảng Trị",
          "state_name": "Quảng Trị"
        },
        {
          "name": "Thanh Hóa",
          "state_name": "Thanh Hóa"
        },
        {
          "name": "Thừa Thiên–Huế",
          "state_name": "Thừa Thiên–Huế"
        },
        {
          "name": "Đắk Lắk",
          "state_name": "Đắk Lắk"
        },
        {
          "name": "Đắk Nông",
          "state_name": "Đắk Nông"
        },
        {
          "name": "Gia Lai",
          "state_name": "Gia Lai"
        },
        {
          "name": "Kon Tum",
          "state_name": "Kon Tum"
        },
        {
          "name": "Lâm Đồng",
          "state_name": "Lâm Đồng"
        },
        {
          "name": "Bình Định",
          "state_name": "Bình Định"
        },
        {
          "name": "Bình Thuận",
          "state_name": "Bình Thuận"
        },
        {
          "name": "Khánh Hòa",
          "state_name": "Khánh Hòa"
        },
        {
          "name": "Ninh Thuận",
          "state_name": "Ninh Thuận"
        },
        {
          "name": "Phú Yên",
          "state_name": "Phú Yên"
        },
        {
          "name": "Quảng Nam",
          "state_name": "Quảng Nam"
        },
        {
          "name": "Quảng Ngãi",
          "state_name": "Quảng Ngãi"
        },
        {
          "name": "Đà Nẵng",
          "state_name": "Đà Nẵng"
        },
        {
          "name": "Bà Rịa–Vũng Tàu",
          "state_name": "Bà Rịa–Vũng Tàu"
        },
        {
          "name": "Bình Dương",
          "state_name": "Bình Dương"
        },
        {
          "name": "Bình Phước",
          "state_name": "Bình Phước"
        },
        {
          "name": "Đồng Nai",
          "state_name": "Đồng Nai"
        },
        {
          "name": "Tây Ninh",
          "state_name": "Tây Ninh"
        },
        {
          "name": "Hồ Chí Minh",
          "state_name": "Hồ Chí Minh"
        },
        {
          "name": "An Giang",
          "state_name": "An Giang"
        },
        {
          "name": "Bạc Liêu",
          "state_name": "Bạc Liêu"
        },
        {
          "name": "Bến Tre",
          "state_name": "Bến Tre"
        },
        {
          "name": "Cà Mau",
          "state_name": "Cà Mau"
        },
        {
          "name": "Đồng Tháp",
          "state_name": "Đồng Tháp"
        },
        {
          "name": "Hậu Giang",
          "state_name": "Hậu Giang"
        },
        {
          "name": "Kiên Giang",
          "state_name": "Kiên Giang"
        },
        {
          "name": "Long An",
          "state_name": "Long An"
        },
        {
          "name": "Sóc Trăng",
          "state_name": "Sóc Trăng"
        },
        {
          "name": "Tiền Giang",
          "state_name": "Tiền Giang"
        },
        {
          "name": "Trà Vinh",
          "state_name": "Trà Vinh"
        },
        {
          "name": "Vĩnh Long",
          "state_name": "Vĩnh Long"
        },
        {
          "name": "Cần Thơ",
          "state_name": "Cần Thơ"
        }
      ]

    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <div className="acr-filter-form container">
                <div className="search-type-real">
                    <Row>
                        <Col span={16}>
                            {/* <Input className="input" placeholder="Tìm kiếm..." onChange={onSearch} /> */}
                            <Input className="input" placeholder="Tìm kiếm..." value={valueInput} onInput={e => setValueInput(e.target.value)}/>
                        </Col>
                        <Col span={4} style={{marginLeft:'25px'}} onClick={() => search()}>
                            <ButtonCustom value="Tìm kiếm" className="btn-search" />
                        </Col>
                        <Col span={3} style={{marginLeft:'15px'}} onClick={() => clearFilter()}>
                            <ButtonCustom value="Xóa lọc" className="btn-search btn-search__grey" />
                        </Col>
                    </Row>
                </div>
                <form>
                    <div className={`advanced-search d-block `}>
                        <Row >
                            <Col span={6} className="item-form">
                                <div className="acr-custom-select form-group">
                                    <SelectCustom title="Thành phố" options={city} />
                                </div>
                            </Col>
                            <Col span={6} className="item-form">
                                <div className="acr-custom-select form-group">
                                    <SelectCustom title="Giá cả / Đêm" options={prices} />
                                </div>
                            </Col>
                            <Col span={6} className="item-form">
                                <div className="acr-custom-select form-group">
                                    <SelectCustom title="Số phòng" options={rooms} />
                                </div>
                            </Col>
                            <Col span={6} className="item-form">
                                <div className="acr-custom-select form-group">
                                    <SelectCustom title="Diện tích" options={area} />
                                </div>
                            </Col>

                        </Row>
                    </div>
                </form>
            </div>
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
                            dataSource={apartmentList}
                            renderItem={item => (
                                <List.Item className="item col-6 col-lg-3"
                                    key={item.id}
                                >
                                    <ThumbnailToday item={item} isLogin={LogIn} favouriteList={false}/>
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
import { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Images from '../../constants/images';
import FormBooking from '../../pages/Home/components/FormBooking';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import { Apartment } from '../../constants/Apartment';
import SliderBanner from '../Home/components/SliderBanner';


function RoomDetail() {

    const history = useHistory()
    let id = parseInt(history.location.pathname.slice(10));
    const result = Apartment.filter(apartment => apartment.id === id)[0];
    const LogIn = localStorage.getItem('LOGIN');
    const item = {
        reward: LogIn ? 10 : 0,
        price: result.priceInt
    }
    // eslint-disable-next-line
    const [breadcrumb, setBreadCrumb] = useState({
        title: 'Chi Tiết Phòng',
        breadcrumb: [
            {
                name: 'Trang Chủ',
            }
        ],
        current: 'Chi Tiết Phòng'
    });
    const toRegister = () => {
        history.push({
            pathname: '/dang-ky',
            search: `?id=${id}`,
        })
        // history.push(`/dang-ky`);
    }
    // eslint-disable-next-line
    const [list, setList] = useState([
        result.img,
        "https://cdn.luxstay.com/rooms/37700/large/IMG_2698.jpg",
        "https://cdn.luxstay.com/users/419998/xNdGXrwocu0jC0Xq_WaTAl6x.jpg",
        "https://cdn.luxstay.com/users/47608/X2Swqa-wSRPhevvzwSevj1aF.jpg",
        "https://cdn.luxstay.com/users/407757/BXSWxc8JJfPItWkkKpNpwqMf.jpg"
    ]
    )
    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <section className="room-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <SliderBanner className={"slider-detail"} list={list}/>
                            <div className="room-details-item">
                                {/* <img src={result.img} alt="" /> */}
                                <div className="rd-text">
                                    <div className="rd-title row">
                                        <div className="title-wrapper col-4">
                                            <h3>{result.title}</h3>
                                        </div>
                                        <div className="rdt-right col-8">
                                            <div className="rating">
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star-half_alt" />
                                            </div>
                                            {LogIn
                                                ?
                                                <div className="reward">Tài khoản được ưu đãi:
                                                    <span style={{ fontSize: '2rem', fontWeight: 700, color: '#dfa974' }}> 10%</span>
                                                </div>
                                                :
                                                <a href onClick={() => toRegister()}>Đăng Ký Ngay Để Nhận Ưu Đãi</a>
                                            }
                                        </div>
                                    </div>
                                    <h2>{result.price}đ<span>/Đêm</span></h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="r-o">Diện Tích:</td>
                                                <td>{result.area} m2</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Không gian:</td>
                                                <td>{result.people}</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Phòng Ngủ:</td>
                                                <td>{result.bedroom}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="f-para">{result.description}</p>

                                </div>
                            </div>
                            <div className="rd-reviews">
                                <h4>Reviews</h4>
                                <div className="review-item">
                                    <div className="ri-pic">
                                        <img src={Images.AVATAR_1} alt="" />
                                    </div>
                                    <div className="ri-text">
                                        <span>01 May 2021</span>
                                        <div className="rating">
                                            <i className="icon_star" />
                                            <i className="icon_star" />
                                            <i className="icon_star" />
                                            <i className="icon_star" />
                                            <i className="icon_star-half_alt" />
                                        </div>
                                        <h5>Vũ Khánh</h5>
                                        <p>Phòng đẹp, giá cả hợp lý, chủ nhà vui tính.</p>
                                    </div>
                                </div>
                                <div className="review-item">
                                    <div className="ri-pic">
                                        <img src={Images.AVATAR_2} alt="" />
                                    </div>
                                    <div className="ri-text">
                                        <span>23 May 2021</span>
                                        <div className="rating">
                                            <i className="icon_star" />
                                            <i className="icon_star" />
                                            <i className="icon_star" />
                                            <i className="icon_star" />
                                            <i className="icon_star-half_alt" />
                                        </div>
                                        <h5>Hoài Phong</h5>
                                        <p>Phòng đẹp, book phòng nhanh, app vô cùng tiện lợi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="room-booking">
                                <FormBooking item={item} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default RoomDetail;
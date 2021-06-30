import $ from 'jquery';
import Images from '../../constants/images';
import BreadCrumb from '../../components/BreadCrumb';
import Select from 'react-select';
import FormBooking from '../../pages/Home/components/FormBooking';

import './styles.scss';
import { useEffect, useState } from 'react';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker'


function RoomDetail(props) {

    const [breadcrumb, setBreadCrumb] = useState({
        title: 'Chi Tiết Phòng',
        breadcrumb: [
            {
                name: 'Trang Chủ',
            }
        ],
        current: 'Chi Tiết Phòng'
    });

    useEffect(() => {
        $(".pick-date .icon_calendar").click(function () {
            console.log($(this).closest('.pick-date').find('input.date-input'));
            $(this).closest('.pick-date').find('input.date-input').datepicker({
                minDate: 0,
                dateFormat: 'dd MM, yy'
            });
            $(this).closest('.pick-date').find('input.date-input').focus();
        });
    }, [])

    return (
        <div>
            <BreadCrumb prop={breadcrumb} />
            <section className="room-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="room-details-item">
                                <img src="https://cdn.luxstay.com/users/329302/YF1ngXmAcWh14z4N0J6glyfM.jpg" alt="" />
                                <div className="rd-text">
                                    <div className="rd-title">
                                        <h3>Premium King Room</h3>
                                        <div className="rdt-right">
                                            <div className="rating">
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star" />
                                                <i className="icon_star-half_alt" />
                                            </div>
                                            <a href="#">Đăng Ký Ngay Để Nhận Ưu Đãi</a>
                                        </div>
                                    </div>
                                    <h2>159đ<span>/Đêm</span></h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="r-o">Diện Tích:</td>
                                                <td>30 ft</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Không gian:</td>
                                                <td>Max persion 5</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Phòng Ngủ:</td>
                                                <td>King Beds</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Dịch vụ :</td>
                                                <td>Wifi, Television, Bathroom,...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="f-para">Motorhome or Trailer that is the question for you. Here are some of the
                                        advantages and disadvantages of both, so you will be confident when purchasing an RV.
                                        When comparing Rvs, a motorhome or a travel trailer, should you buy a motorhome or fifth
                                        wheeler? The advantages and disadvantages of both are studied so that you can make your
                                        choice wisely when purchasing an RV. Possessing a motorhome or fifth wheel is an
                                        achievement of a lifetime. It can be similar to sojourning with your residence as you
                                        search the various sites of our great land, America.</p>
                                    <p>The two commonly known recreational vehicle classes are the motorized and towable.
                                        Towable rvs are the travel trailers and the fifth wheel. The rv travel trailer or fifth
                                        wheel has the attraction of getting towed by a pickup or a car, thus giving the
                                        adaptability of possessing transportation for you when you are parked at your campsite.
                                    </p>
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
                                <FormBooking />
                                {/**
                                <h3>Your Reservation</h3>
                                      <form action="#">
                                    <div className="check-date">
                                        <label htmlFor="date-in">Check In:</label>
                                        <input type="text" className="date-input" id="date-in" />
                                        <i className="icon_calendar" />
                                    </div>
                                    <div className="check-date">
                                        <label htmlFor="date-out">Check Out:</label>
                                        <input type="text" className="date-input" id="date-out" />
                                        <i className="icon_calendar" />
                                    </div>
                                    <div className="select-option">
                                        <label htmlFor="guest">Guests:</label>
                                        <Select
                                            name="guest"
                                            options={[
                                                { value: '2 Adults', label: '2 Adults' },
                                                { value: '3 Adults', label: '3 Adults' },
                                            ]}
                                        />
                                    </div>
                                    <div className="select-option">
                                        <label htmlFor="room">Room:</label>
                                        <select id="room">
                                            <option value>1 Room</option>
                                        </select>
                                    </div>
                                    <button type="submit">Check Availability</button>
                                </form>

                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default RoomDetail;
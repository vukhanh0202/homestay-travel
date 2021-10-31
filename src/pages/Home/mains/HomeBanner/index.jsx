import React, {useState} from 'react';
import SliderBanner from '../../components/SliderBanner';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import Images from '../../../../constants/images';

function HomeBanner() {
    const history = useHistory()
    const onList = () => {
        history.push(`/danh-sach`);
    }
    // eslint-disable-next-line
    const [list, setList] = useState([
        Images.SLIDE_BANNER_1,
        Images.SLIDE_BANNER_2,
        Images.SLIDE_BANNER_3
    ]
    )
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-text">
                            <h1>Luxury Homestay</h1>
                            <p>Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Homestay Travel.</p>
                            <a onClick={() => onList()} href className="primary-btn">Khám Phá Ngay</a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
                    </div>
                </div>
            </div>
            <SliderBanner className={"hero-slider"} list={list}/>
        </section>
    );
}

export default HomeBanner;
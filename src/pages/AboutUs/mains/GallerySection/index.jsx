import React from 'react';
import Images from '../../../../constants/images';
import GalleryItem from '../../components/GalleryItem';
import './styles.scss';

GallerySection.propTypes = {

};

function GallerySection(props) {

    return (
        <section className="gallery-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Our Gallery</span>
                            <h2>Discover Our Work</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <GalleryItem item={{ img: Images.GALLERY_1, title: 'Room Luxury' }} />
                        <div className="row">
                            <div className="col-sm-6">
                                <GalleryItem item={{ img: Images.GALLERY_3, title: 'Room Luxury' }} />
                            </div>
                            <div className="col-sm-6">
                                <GalleryItem item={{ img: Images.GALLERY_4, title: 'Room Luxury' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <GalleryItem item={{ classes: 'large-item', img: Images.GALLERY_2, title: 'Room Luxury' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GallerySection;
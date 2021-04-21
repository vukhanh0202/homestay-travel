import React from 'react';
import './styles.scss';

Footer.propTypes = {

};

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-text">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ft-about">
                                <div className="logo">
                                    <a>
                                        <img src="img/footer-logo.png" alt="" />
                                    </a>
                                </div>
                                <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                                <div className="fa-social">
                                    <a><i className="fa fa-facebook" /></a>
                                    <a><i className="fa fa-twitter" /></a>
                                    <a><i className="fa fa-tripadvisor" /></a>
                                    <a><i className="fa fa-instagram" /></a>
                                    <a><i className="fa fa-youtube-play" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="ft-contact">
                                <h6>Contact Us</h6>
                                <ul>
                                    <li>(12) 345 67890</li>
                                    <li>info.colorlib@gmail.com</li>
                                    <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="ft-newslatter">
                                <h6>New latest</h6>
                                <p>Get the latest updates and offers.</p>
                                <form action="#" className="fn-form">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit"><i className="fa fa-send" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <ul>
                                <li><a >Contact</a></li>
                                <li><a >Terms of use</a></li>
                                <li><a>Privacy</a></li>
                                <li><a>Environmental Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="co-text">
                                <p>
                                    Copyright © All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
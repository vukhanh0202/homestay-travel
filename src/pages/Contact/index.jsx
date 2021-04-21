import React from 'react';
import './styles.scss';

Contact.propTypes = {

};

function Contact(props) {

    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-text">
                            <h2>Contact Info</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="c-o">Address:</td>
                                        <td>856 Cordia Extension Apt. 356, Lake, US</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">Phone:</td>
                                        <td>(12) 345 67890</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">Email:</td>
                                        <td>info.colorlib@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="c-o">Fax:</td>
                                        <td>+(12) 345 67890</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <form action="#" className="contact-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Your Email" />
                                </div>
                                <div className="col-lg-12">
                                    <textarea placeholder="Your Message" defaultValue={""} />
                                    <button type="submit">Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0606825994123!2d-72.8735845851828!3d40.760690042573295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e85b24c9274c91%3A0xf310d41b791bcb71!2sWilliam%20Floyd%20Pkwy%2C%20Mastic%20Beach%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1578582744646!5m2!1sen!2sbd" height={470} style={{ border: 0 }} allowFullScreen />
                </div>
            </div>
        </section>
    );
}

export default Contact;
import React from 'react';
import './styles.scss';

function RoomItem(props) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="hp-room-item set-bg" data-setbg={props.item.img}>
                <div className="hr-text">
                    <h3>{props.item.typeRoom}</h3>
                    <h2>{props.item.price}<span>/Pernight</span></h2>
                    <table>
                        <tbody>
                            <tr>
                                <td className="r-o">Size:</td>
                                <td>{props.item.size}</td>
                            </tr>
                            <tr>
                                <td className="r-o">Capacity:</td>
                                <td>{props.item.capacity}</td>
                            </tr>
                            <tr>
                                <td className="r-o">Bed:</td>
                                <td>{props.item.bed}</td>
                            </tr>
                            <tr>
                                <td className="r-o">Services:</td>
                                <td>{props.item.service}</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#" className="primary-btn">More Details</a>
                </div>
            </div>
        </div>
    );
}

export default RoomItem;
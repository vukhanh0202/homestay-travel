import React from 'react';
import './styles.scss';

RoomItem.propTypes = {

};

function RoomItem(props) {
    return (
        <div className="room-item">
            <img src={props.item.img} alt="" />
            <div className="ri-text">
                <h4>{props.item.title}</h4>
                <h3>{props.item.price}<span>/Pernight</span></h3>
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
    );
}

export default RoomItem;
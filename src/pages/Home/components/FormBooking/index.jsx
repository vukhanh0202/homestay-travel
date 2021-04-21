import $ from 'jquery';
import React, { useEffect } from 'react';
import './styles.scss';
import Select from 'react-select';

function FormBooking() {
    // useEffect(() => {
    //     $(".date-input").datepicker({
    //         minDate: 0,
    //         dateFormat: 'dd MM, yy'
    //     });
    // }, [])

    return (
        <div className="booking-form">
            <h3>Booking Your Hotel</h3>
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
                    <Select
                        name="room"
                        options={[
                            { value: '1 Room', label: '1 Room' },
                            { value: '2 Room', label: '2 Room' },
                        ]}
                    />
                </div>
                <button type="submit">Check Availability</button>
            </form>
        </div>
    );
}

export default FormBooking;
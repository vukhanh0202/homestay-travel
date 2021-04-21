import $ from 'jquery';
import React, { useEffect } from 'react';
import './styles.scss';

PreLoader.propTypes = {

};

function PreLoader() {
    useEffect(() => {
        $(window).on('load', function () {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");
        });
    }, [])
    return (
        <div id="preloder">
            <div className="loader"></div>
        </div>
    );
}

export default PreLoader;
import { connect } from "react-redux";
import React, { useEffect } from 'react';
import Rooms from "../pages/Rooms";
import * as actions from './../actions/index'

function RoomsContainer(props) {
    var { apartments, breadcrumbs } = props
    useEffect(() => {
        props.onSearch();
    }, [])

    return (
        <Rooms apartments={apartments} breadcrumbs={breadcrumbs} />
    );
}
const mapStateToProps = state => {
    return { apartments: state.apartments, breadcrumbs: state.breadcrumbs }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: () => {
            dispatch(actions.breadCrumbHome())
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);
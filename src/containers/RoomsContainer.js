import { connect } from "react-redux";
import Rooms from "../pages/Rooms";

function RoomsContainer(props) {
    var { apartments } = props
    return (
        <Rooms apartments={apartments} />
    );
}
const mapStateToProps = state => {
    return { apartments: state.apartments }
}
export default connect(mapStateToProps, null)(RoomsContainer);
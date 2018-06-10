import { connect } from 'react-redux';
import Thermostat from '../components/Thermostat';

function mapStateToProps(state) {
    return {
        // the left side key must be the name of the props you want to put the info in
        temp:state.currentTemp
        // the rgith side value is the name of the state you want to go into the prop
    }
}

// this is a bolierplate but you must change what component gets connected
let ThermostatContainer = connect(mapStateToProps)(Thermostat);
export default ThermostatContainer;
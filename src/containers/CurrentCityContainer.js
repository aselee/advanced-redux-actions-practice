import { connect } from 'react-redux';
import CurrentCity from '../components/CurrentCity';

function msp(state) {
    return {
        // the left side key must be the name of the props you want to put the info in
        count:state.currentCity
        // the rgith side value is the name of the state you want to go into the prop
    }
}

// this is a bolierplate but you must change what component gets connected
let CurrentCityContainer = connect(msp)(CurrentCity);
export default CurrentCityContainer;
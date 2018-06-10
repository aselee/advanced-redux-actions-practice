import { connect } from 'react-redux';
import Counter from '../components/Counter';


// create a function, the name does not matter
// but its practice to call is mapStateToProps


function mapStateToProps(state) {
    return {
        // the left side key must be the name of the props you want to put the info in
        count:state.currentCount
        // the rgith side value is the name of the state you want to go into the prop
    }
}

// this is a bolierplate but you must change what component gets connected
let CounterContainer = connect(mapStateToProps)(Counter);
export default CounterContainer;
import { connect } from 'react-redux';
import { setCurrentCity } from '../actions';
import CurrentCity from '../components/CurrentCity';

function mapDispatchToProps(dispatch) {
    return {
        set:function(city){
            let action = CurrentCity();
            dispatch(setCurrentCity(action));
        }
    }
};

export default connect(null,mapDispatchToProps)(CurrentCity);
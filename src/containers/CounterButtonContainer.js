import {increaseCounter, decreaseCounter} from "../actions";
import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';


function mapDispatchToProps(dispatch){
  return {
    increase:function(user){
      var action = increaseCounter();
      dispatch(action);
    },
    decrease:function(user){
      var action = decreaseCounter();
      dispatch(action);
    }
  }
  }

//   if you dont need mapStateToProps,
//   you put null as a placeholder
  
export default connect(null,mapDispatchToProps)(CounterButton);
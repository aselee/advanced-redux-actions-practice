import {addUser, removeUser} from "../actions";
import { connect } from 'react-redux';
import UserButtons from '../components/UserButtons';

function mapDispatchToProps(dispatch){
    return {
      add:function(user){
        var action = addUser(user);
        dispatch(action);
      },
      remove:function(user){
        var action = removeUser(user);
        dispatch(action);
      }
    }
  }
  
    // if you dont need mapStateToProps,
    // you put null as a placeholder
    //
  export default connect(null,mapDispatchToProps)(UserButtons);
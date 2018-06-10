import { connect } from 'react-redux';
import Users from '../components/Users';

function msp(state) {
    return {
      Users:state.users
    }
  }

let UsersContainer = connect(msp)(Users);
export default UsersContainer;
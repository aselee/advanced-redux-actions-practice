import { connect } from 'react-redux';
import Users from '../components/Users';

function msp(state) {
    return {
      Users:state.users,
      firstNameFilter:state.searchText,
      sortOn:state.currentUserSort
    }
  }

let UsersContainer = connect(msp)(Users);
export default UsersContainer;
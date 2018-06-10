import { connect } from 'react-redux';
import { currentUserSort } from '../actions';
import SortUsers from '../components/SortUsers';

function mdp(dispatch) {
    return {
        set:function(user){
            let action = SortUsers();
            dispatch(currentUserSort(action));
        }
    }
};

export default connect(null,mdp)(SortUsers);
import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import Modal from '../components/Modal';

function mdp(dispatch) {
    return {
        set:function(isLoading){
            let action = Modal();
            dispatch(setIsLoading(action));
        }
    }
};

export default connect(null,mdp)(Modal);
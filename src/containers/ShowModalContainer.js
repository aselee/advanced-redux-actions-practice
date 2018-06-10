import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import ShowModal from '../components/ShowModal';

function mdp(dispatch) {
    return {
        set:function(isLoading){
            let action = ShowModal();
            dispatch(setIsLoading(action));
        }
    }
};

export default connect(null,mdp)(ShowModal);
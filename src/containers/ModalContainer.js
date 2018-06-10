import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import Modal from '../components/Modal';

// change it back to mapDispatchToProps??

function mdp(dispatch) {
    return {
        setisLoading:function(isLoading){
            let action = Modal();
            dispatch(setIsLoading(action));
        }
    }
};

// export default connect(null,mdp)(Modal);




function msp(state) {
    return {
        setIsLoading:state.isLoading
    }
}

// this is a bolierplate but you must change what component gets connected
let ModalContainer = connect(msp,mdp)(Modal);
export default ModalContainer;
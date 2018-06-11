import { connect } from 'react-redux';
import { setScaleVideo } from '../actions';
import ScaleVideo from '../components/ScaleVideo';

function mdp(dispatch) {
    return {
        set:function(scale){
            let action = setScaleVideo();
            dispatch(setScaleVideo(action));
        }
    }
};

export default connect(null,mdp)(ScaleVideo);
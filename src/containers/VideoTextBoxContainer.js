import { connect } from 'react-redux';
import { setVideoUrl } from 'react-redux';
import VideoTextBox from '../components/VideoTextBox';

function mapDispatchToProps(dispatch) {
    return {
        set:function(video){
            let action = VideoTextBox();
            dispatch(setVideoUrl(action));
        }
    }
};

export default connect(null,mapDispatchToProps)(VideoTextBox);
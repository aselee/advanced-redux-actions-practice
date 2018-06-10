import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

function msp(state) {
    return {
        URL:state.videoURL,
        scale:state.videoScale
    }
}

// this is a bolierplate but you must change what component gets connected
let VideoPlayerContainer = connect(msp)(VideoPlayer);
export default VideoPlayerContainer;
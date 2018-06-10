import { connect } from 'react-redux';
import { setSearchText } from '../actions';
import SearchTextBox from '../components/SearchTextBox';

function mapDispatchToProps(dispatch) {
    return {
        set:function(txt){
            let action = SearchTextBox();
            dispatch(setSearchText(action));
        }
    }
};

export default connect(null,mapDispatchToProps)(SearchTextBox);
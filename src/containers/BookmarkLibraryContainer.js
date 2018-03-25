import {connect} from 'react-redux';
import {submitBookmark} from '../actions';
import BookmarkLibrary from '../components/BookmarkLibrary';


const getBookmarks = (state) => {
  console.log('state in Smart Bookmark Lib Container ', state);
  return {bookmarks: state.bookmarks};
};

const mapStateToProps = function(state){
  return getBookmarks(state);
};

export default connect(
  mapStateToProps
)(BookmarkLibrary);

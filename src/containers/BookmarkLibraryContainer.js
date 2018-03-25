import {connect} from 'react-redux';
import {submitBookmark} from '../actions';
import BookmarkLibrary from '../components/BookmarkLibrary';


const getBookmarks = (state) => {
  console.log('state in Smart Bookmark Lib Container ', state);
  console.log('bookmarks state ', state.inputComponent.bookmarks);
  return {bookmarks: state.inputComponent.bookmarks};
};

const mapStateToProps = function(state){
  return getBookmarks(state);
};

export default connect(
  mapStateToProps
)(BookmarkLibrary);

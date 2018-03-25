import React from 'react';
import SingleBookmark from './SingleBookmark';
import PropTypes from 'prop-types';


class BookmarkLibrary extends React.Component{

  render(){

    console.log(this.props);
    let incomingState = [].concat(this.props.bookmarks);

    const bookmarkCollection = incomingState.map((bookmark) => {
      return (<SingleBookmark
        title={bookmark.title}
        description={bookmark.description}
        url={bookmark.url}
      />);
    });

    return(
      <div>
        <p>Your Bookmark Collection</p>
        {bookmarkCollection}
      </div>
    );
  }
}

BookmarkLibrary.propTypes = {
 bookmarks: PropTypes.array
};

export default BookmarkLibrary;

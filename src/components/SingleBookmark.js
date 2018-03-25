import React from 'react';
import PropTypes from 'prop-types';


class SingleBookmark extends React.Component{
  render(){

    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
        <p>{this.props.url}</p>
      </div>
    );
  }
}

SingleBookmark.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
};

export default SingleBookmark;

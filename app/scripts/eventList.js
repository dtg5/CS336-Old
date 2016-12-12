import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import Comment from './event';


module.exports = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment id={comment.id} title={comment.title} key={comment.id}>
          {comment.description}
          {comment.startDate}
          {comment.endDate}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

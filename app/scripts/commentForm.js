
import React from 'react';
import $ from 'jquery'


module.exports = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: 'VGS Leadership'});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
   handleSubmit: function(e) {
    e.preventDefault();
 //   var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text ) {
      return;
    }
    this.props.onCommentSubmit({author: 'VGS Leadership', text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
       <form className="commentForm" onSubmit={this.handleSubmit}>
        
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
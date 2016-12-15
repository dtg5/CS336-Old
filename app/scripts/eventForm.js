
import React from 'react';
import $ from 'jquery'


module.exports = React.createClass({
  getInitialState: function() {
    return {title: '', description: ''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleTimeChange: function(e) {
    this.setState({time: e.target.value});
  },
   handleStartChange: function(e) {
    this.setState({startDate: e.target.value});
  },
  handleEndChange: function(e) {
    this.setState({endDate: e.target.value});
  },
   handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var description = this.state.description.trim();
    var time = this.state.time.trim();
    var startDate = this.state.startDate.trim();
    var endDate = this.state.endDate.trim();
    if (!title || !description || !time || !startDate || !endDate) {
      return;
    }
    this.props.onCommentSubmit({title: title, description: description, time: time, startDate: startDate, endDate: endDate});
    this.setState({title: '', description: '', time: '', startDate: '', endDate: ''});
  },
  render: function() {
    return (
       <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Event title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <input
          type="text"
          placeholder="Event time"
          value={this.state.time}
          onChange={this.handleTimeChange}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={this.state.startDate}
          onChange={this.handleStartChange}
        />
        <input
          type="date"
          placeholder="End of event"
          value={this.state.endDate}
          onChange={this.handleEndChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
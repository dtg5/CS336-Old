
import React from 'react';
import $ from 'jquery'


module.exports = React.createClass({
  getInitialState: function() {
    return {title: '', startDate: '', endDate: '', description: ''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleStartDateChange: function(e) {
    this.setState({startDate: e.target.value});
  },
  handleEndDateChange: function(e) {
    this.setState({endDate: e.target.value});
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
   handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var startDate = this.state.startDate.trim();
    var endDate = this.state.endDate.trim();
    var description = this.state.description.trim();
    if (!startDate || !title || !endDate || !description) {
      return;
    }
    this.props.onEventSubmit({title: title, startDate: startDate, endDate: endDate, description: description});
    this.setState({title: '', startDate: '', endDate: '', description: ''});
  },
  render: function() {
    return (
       <form className="eventForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title of event"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <input
          type="date"
          value={this.state.startDate}
          onChange={this.handleStartDateChange}
        />
         <input
          type="date"
          value={this.state.startDate}
          onChange={this.handleEndDateChange}
        />
         <input
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
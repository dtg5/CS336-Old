import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';


import Event from './event';


module.exports = React.createClass({
  render: function() {
    var eventNodes = this.props.data.map(function(event) {
      return (
        <Event id={event.id} title={event.title} key={event.id}>
          {event.description} {"\n"}
          {event.startDate}   {"\n"}
          Starts at:{event.time}  {"\n"}
          {event.endDate}
        </Event>

      );
    });
    return (
      <div className="eventList">
        {eventNodes}
      </div>
    );
  }
});

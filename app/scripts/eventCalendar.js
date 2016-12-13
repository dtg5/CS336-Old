import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import Comment from './event';


const EventCalendar = require('react-event-calendar');



module.exports = React.createClass({
  render: function() {
    var events = this.props.data.map(function(comment) {
      return (
        <Comment id={comment.id} title={comment.title} key={comment.id}>
          {comment.startDate}
          {comment.endDate}
        </Comment>
      );
    });
    return (
      <div>
      <EventCalendar 
        month={12}
        year={2016}
        events={events} 
        onEventClick={(target, eventData, day) => console.log(eventData)} 
    />
      </div>
    );
  }
});



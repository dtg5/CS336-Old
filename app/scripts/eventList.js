import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import event from './event';


module.exports = React.createClass({
  render: function() {
    var EventNodes = this.props.data.map(function(event) {
      return (
        <event id={event.id} title={event.title} key={event.id}>
          {event.description}
        </event>
      );
    });
    return (
      <div className="eventList">
        {eventNodes}
      </div>
    );
  }
});
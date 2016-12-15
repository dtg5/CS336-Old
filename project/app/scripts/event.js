
import React from 'react';
import Remarkable from 'remarkable';
import { Link } from 'react-router';

module.exports = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="event">
        <h3 className="eventTitle">
          {this.props.title}
        </h3>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <Link to={'/events/' + this.props.id}>Edit</Link>
      </div>
    );
  }
});

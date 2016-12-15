//Lisa Terwilliger
//Starting page with all the links

import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>VGS Website</h1>
        <ul role="nav">
          <li><Link to="/" onlyActiveOnIndex>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/comments">Comments</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

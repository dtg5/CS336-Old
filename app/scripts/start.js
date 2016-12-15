//Lisa Terwilliger
//Starting page with all the links

import React from 'react'
import links from './links'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>VGS Website</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</links></li>
          <li><NavLink to="/about">About</links></li>
          <li><NavLink to="/events">Events</links></li>
          <li><NavLink to="/comments">Comments</links></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

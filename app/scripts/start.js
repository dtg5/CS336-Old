//Lisa Terwilliger
//Starting page with all the links

import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <img src="http://i.imgur.com/9n95ZKk.png"/>
        <h1>Video Game Sphere Website</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
        {this.props.children}
      </div>
      // <div class="area">
      //   <section class="stage">
      //     <figure class="ball">
      //       <span class="shadow"></span>
      //       <span class="eight"></span>
      //     </figure>
      //   </section>
      // </div>
    )
  }
})

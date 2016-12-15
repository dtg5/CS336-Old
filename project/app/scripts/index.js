//Lisa Terwilliger

import React from 'react';
import ReactDOM from 'react-dom';
//lab12
import { Router, Route, Redirect, browserHistory } from 'react-router';

import CommentBox from './commentBox';
import CommentEdit from './commentEdit';

import eventBox from './eventBox';
import eventEdit from './eventEdit';

import start from './start.js';
import homePage from './homePage.js';
import about from './about.js';

import calendar from './eventCalendar.js';

import '../css/base.css';




ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={CommentBox}/>
        <Route path="/:id" component={CommentEdit} />
    </Router>
), document.getElementById('content')
);

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={eventBox}/>
        <Route path="/:id" component={eventEdit} />
    </Router>
), document.getElementById('event')
);

//attempt at routing
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={start}>
         	<IndexRoute component={homePage}/>
        	<Route path="/about" component={About} />
            <Route path="/comments" component={commentBox} />
        	<Route path="/comments/:id" component={commentEdit} />
        	<Route path="/events" component={eventBox} />
        	<Route path="/events/:id" component={eventEdit} />		
        </Route>
    </Router>
), document.getElementById('content'));


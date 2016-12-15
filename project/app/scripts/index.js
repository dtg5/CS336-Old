//Lisa Terwilliger

import React from 'react';
import ReactDOM from 'react-dom';
//lab12
import { Router, Route, Redirect, browserHistory, IndexRoute} from 'react-router';

import commentBox from './commentBox';
import commentEdit from './commentEdit';

import eventBox from './eventBox';
import eventEdit from './eventEdit';

import start from './start.js';
import homePage from './homePage.js';
import about from './about.js';

import calendar from './eventCalendar.js';

import '../css/base.css';




ReactDOM.render((
    <Router history={browserHistory}>
    	<Route path="/" component={start}>
    		<IndexRoute component={homePage}/>
            <Route path="/comments" component={commentBox} />
        	<Route path="/comments/:id" component={commentEdit} />	
        	<Route path="/events" component={eventBox} />
        	<Route path="/events/:id" component={eventEdit} />
        	<Route path="/about" component={about} />
        </Route>
    </Router>
), document.getElementById('content')
);




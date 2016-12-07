//Lisa Terwilliger



import React from 'react';
import ReactDOM from 'react-dom';
//lab12
import { Router, Route, Redirect, browserHistory } from 'react-router';

import CommentBox from './commentBox';
import CommentEdit from './commentEdit';

import eventBox from './eventBox';
import eventEdit from './eventEdit';

import '../css/base.css';




ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={CommentBox}/>
        <Route path="/:id" component={CommentEdit} />
    </Router>
), document.getElementById('content')
);
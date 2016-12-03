import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentbox';
import CommentEdit from './commentEdit';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import '../css/base.css';

// REACT RENDER
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={CommentBox}/>
        <Route path="/:id" component={CommentEdit} />
    </Router>
), document.getElementById('content')
);
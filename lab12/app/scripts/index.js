import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentbox';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import '../css/base.css';

// REACT RENDER
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
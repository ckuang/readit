import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Link, browserHistory, IndexRoute} from 'react-router';

// components
//
import Posts from './components/Posts';
import Comments from './components/Comments';
import CommentForm from './components/CommentForm';
import SingleComment from './components/SingleComment';
import PostForm from './components/PostForm';
import SinglePost from './components/SinglePost';

import './main.css';

const App = React.createClass({
    render: function() {
      return (
        <div>
          <div className="header">
            <h1 className="appTitle">Readit</h1>
          </div>
          {this.props.children}
        </div>
      )
    }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Posts} />
      <Route path="comments" component={Comments}/>
      <Route path="commentsform" component={CommentForm}/>
      <Route path="singlecomment/:id" component={SingleComment}/>
      <Route path="postform" component={PostForm}/>
      <Route path="singlepost/:id" component={SinglePost}/>
    </Route>
  </Router>,
  document.getElementById('root')
)

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Link, browserHistory, IndexRoute} from 'react-router';

// components
//
import Posts from './components/Posts';
import Comments from './components/Comments';
import CommentForm from './components/CommentForm';
import OneComment from './components/SingleComment';
import PostForm from './components/PostForm';

const App = React.createClass({
    render: function() {
      return (
        <div>
          <center>Home</center>
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
      <Route path="singlecomment" component={OneComment}/>
      <Route path="postform" component={PostForm}/>
    </Route>
  </Router>,
  document.getElementById('root')
)


import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Link, browserHistory, IndexRoute} from 'react-router';

// components
import Posts from './components/Posts';

const App = React.createClass({
    render: function() {
      return (
        <div>
          Hello
          {this.props.children}
        </div>
      )
    }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Posts} />
    </Route>
  </Router>,
  document.getElementById('root')
)

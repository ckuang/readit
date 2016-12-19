import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,browserHistory,IndexRoute} from 'react-router'

//This is where we are importing the components 
import Comments from './components/Comments.jsx';


const App = React.createClass({
	render(){
		return(
		<div>
		<center>
		<h1> Welcome home </h1>
		</center>
			{this.props.children}

		</div>

		)
	}
})

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
	<IndexRoute component={Comments}/>
	</Route>
</Router>,
document.getElementById('root')
)

	// <Route path="comments" component={Comments}/>

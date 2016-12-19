import React from 'react';
import $ from 'jquery';
import commentForm from './CommentForm.jsx';

const Comments  = React.createClass({
	render(){
		return(
		<div>
		<h1>THIS IS THE COMMENT PAGE</h1>
		<commentForm/>
		</div>
		)
	}
})

export default Comments;
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const CommentForm = React.createClass({
getInitialState(){
	return({comment: '', postID:null})
},
commentChange(e){
	return this.setState({comment:e.target.value})
},
createComment(){
	$.ajax({
		url: '/api/comment',
		type:'POST',
		data:this.state
	})
},
	render(){
		return(
		<div>
			<center>
			<h1>Comment Form Page:</h1>

			Leave A Comment:<br/>
			<input type="text" value={this.state.comment} onChange={this.commentChange}></input>
			<button onClick={this.createComment}>Add Comment</button>
			</center>
		</div>
		)
	}
})

export default CommentForm;

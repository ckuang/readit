import React from 'react';
import $ from 'jquery';
import SinglePost from './SinglePost.jsx';

const CommentForm = React.createClass({
getInitialState(){
	return({comment: '', PostId: this.props.PostId})
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
		console.log(this.state.comment, ':comment');
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

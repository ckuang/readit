

import React from 'react';
import $ from 'jquery';

//
const CommentForm = React.createClass({

getInitialState(){
	//Get POST ID to be passed down 
	return({comment: '', id: 2})
}, 
handleChange(e){
	this.setState({comment:e.target.value});
},
addComment(){
	console.log(this.state, 'about to POST. what is this?')
	$.ajax({
		url: '/api/comment',
		type: 'POST',
		data: this.state,
		success:((data)=>{
			console.log("data:", data);
		})
	})
},
	render(){
		console.log(this.state.comment, 'this is your text')
		return(
		<div>		
		<center>
			<h1> Make Your Comment Page:</h1>

			Leave a Comment:<br/>
			<input type="text" value={this.state.comment} onChange={this.handleChange}></input>
			<button onClick={this.addComment}>Add Comment</button>
		</center>
		</div>

		)
	}	
})
//
//
//
export default CommentForm; 

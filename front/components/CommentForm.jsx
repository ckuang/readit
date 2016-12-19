import React from 'react';
import $ from 'jquery';

const commentForm = React.createClass({

getInitialState(){
	return({comments: ''})
}, 
handleChange(e){
	this.setState({comments:e.target.value});
},
addComment(){
	$.ajax({
		url: '/api/comment',
		type: 'POST',
		data: this.state
	})
	.done((data)=>{
		console.log('recieved comments data', data)
	})
},
	render(){
		console.log(this.state.comments,'this is the comments')
		console.log(this.state.props, 'this is props')
		return(
		<div>		
		<center>
			<h1> This will display all of the comments </h1>

			Comments:<br/>
			<input type="text" value={this.state.comments} onChange={this.handleChange}></input>
			<button onClick={this.addComment}>Add Comments</button>
		</center>
		</div>

		)
	}
})

export default commentForm; 

import React from 'react';
import $ from 'jquery';

const PostForm = React.createClass({

getInitialState(){
	return({title: '', body: ''})
},
titleChange(e){
	return this.setState({title:e.target.value})
},
bodyChange(e){
	return this.setState({body:e.target.value})
},
createPost(){
	$.ajax({
		url:'/api/post',
		type:'POST',
		data: this.state
	})
},
	render(){
		console.log(this.state.title, 'title');
		console.log(this.state.body, 'body');
		return(
		<div>
			<center>
			<h1> Create a post page: </h1>

			Create A Post: <br/>
			<input type="text" value={this.state.title} onChange={this.titleChange}></input>
			<input type="text" value={this.state.body} onChange={this.bodyChange}></input>
			<button onClick={this.createPost}>Add Post</button>

			</center>
		</div>

		)
	}
})

export default PostForm;

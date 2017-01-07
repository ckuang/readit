import React from 'react';
import $ from 'jquery';
import SingleComment from './SingleComment.jsx';

const Comments  = React.createClass({
getInitialState(){
	return({comments: []})
}, 
componentDidMount(){
	$.ajax({
		url:'/api/comment',
		type: 'GET',
		success:((data)=>{
			console.log(data[0].PostId, 'postId')
		data ? this.setState({comments:data}) : console.log('Error with comment objects')
		})
	})
},
	render(){
		console.log(this.state.comments, 'what is this?')

	return(
			<div>
				<center>
				<h1>ALL COMMENTS:</h1>
				 {
				 this.state.comments.map((value,index)=>{
				 	console.log(value.PostId, 'value post id')
				return <SingleComment comments={value} key={index}/>})
				 }
				</center>
			</div>
		)
	}
})

export default Comments;



import React from 'react';
import $ from 'jquery';
// import commentForm from './CommentForm.jsx';
//
const Comments  = React.createClass({
getInitialState(){
	return({comments: []})
}, 
componentDidMount(){
	$.ajax({
		url:'/api/comment',
		type: 'GET',
		success:((data)=>{
			console.log(data, 'this is the data');
			console.log(data.length, 'this is the length')
			console.log(data[0].comment, 'this is the actual comment')
			data ? this.setState({comments:data}) : console.log('Error with comment objects')
		})
	})
},
	render(){
	let CommentDisplay = this.state.comments.map((value,index)=>{
		return <li key={index}><p>{value.comment}</p></li>
	})

	let length = this.state.comments.length
		return(
		<div>
			<center>
			<h1>ALL COMMENTS:</h1>
			{CommentDisplay}
			</center>
		</div>
		)
	}
})
//
//
//

export default Comments;


